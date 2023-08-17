import { DataReader } from "$lib/DataReader";
import { fsUtils, type fsDirectory, type fsFile, fsEntry } from "$lib/FileSystem";
import pako from "pako";
import { convertNBT, simpleNBTObj } from "./nbt";
import * as zod from "zod";



const BlockState = zod.object({
    Name: zod.string(),
    Properties: zod.optional(zod.record(zod.string(), zod.any()))
});



const BLOCK_AIR: zod.TypeOf<typeof BlockState> = {
    Name: 'minecraft:air'
}



// TODO - Fill more of this out.
const ChunkData = zod.object({
    DataVersion: zod.number().int().min(0),
    xPos: zod.number().int(),
    yPos: zod.number().int(),
    zPos: zod.number().int(),
    Status: zod.literal('full').or(zod.string()),
    LastUpdate: zod.bigint().min(0n),
    sections: zod.array(zod.object({
        Y: zod.number().int(),
        block_states: zod.object({
            palette: zod.array(BlockState),
            data: zod.optional(zod.instanceof(BigInt64Array))
        })
    })),
    block_entities: zod.array(zod.object({
        x: zod.number().int(),
        y: zod.number().int(),
        z: zod.number().int(),
        id: zod.string()
    }))
});





export class Chunk {
    data: zod.TypeOf<typeof ChunkData>;

    sections: (zod.TypeOf<typeof BlockState>[] | null)[];

    constructor(data: unknown) {
        this.data = ChunkData.parse(data);
        this.sections = new Array(this.data.sections.length).fill(null);
    }

    deserializeSection(ind: number) {
        if(this.sections[ind] != null) return;

        const section = this.data.sections[ind].block_states;
        const data = section.data;

        if(section.palette.length == 0) {
            this.sections[ind] = new Array(4096).fill(BLOCK_AIR);
            return;
        }
        if(section.palette.length == 1 || data == undefined) {
            this.sections[ind] = new Array(4096).fill(section.palette[0]);
            return;
        }

        const numBits = Math.max(Math.ceil(Math.log2(section.palette.length)), 4);
        const mask = BigInt((1 << numBits) - 1);

        const deserialized = new Array(4096);

        let dataIndex = 0;
        let bitIndex = 0;
        for(let b = 0; b < 4096; b++) {

            deserialized[b] = section.palette[Number((data[dataIndex] >> BigInt(bitIndex)) & mask)];

            bitIndex += numBits;

            if(bitIndex >= 64) {
                bitIndex = 0;
                dataIndex++;
            }

        }

        this.sections[ind] = deserialized;

    }

    getBlock(bx: number, by: number, bz: number): zod.TypeOf<typeof BlockState> {

        const ind = this.data.sections.findIndex(section => section.Y >= by && section.Y < by + 16)

        this.deserializeSection(ind);

        const section = this.sections[ind];

        if(section == null) {
            throw new Error('Deserialization failed.');
        }

        const blockIndex = (by % 0xF)*0xFF + bz*0x0F + bx;

        return section[blockIndex];

    }

}



const REGION_CHUNK_SIZE = 32;
const REGION_CHUNK_COUNT = REGION_CHUNK_SIZE * REGION_CHUNK_SIZE;
const REGION_CHUNK_SECTOR_SIZE = 4096;

export class Region {
    file: fsFile;

    constructor(file: fsFile) {
        this.file = file;
    }

    offsets: Uint32Array = new Uint32Array(REGION_CHUNK_COUNT);
    lengths: Uint8Array = new Uint8Array(REGION_CHUNK_COUNT);

    async init() {

        const reader = new DataReader(await (await this.file.blob()).slice(0, 4 * REGION_CHUNK_COUNT).arrayBuffer());
        reader.endianness = DataReader.BIG_ENDIAN;

        for(let i = 0; i < REGION_CHUNK_COUNT; i++) {
            this.offsets[i] = (reader.readNumber('Uint8') << 16) | (reader.readNumber('Uint8') << 8) | reader.readNumber('Uint8');
            this.lengths[i] = reader.readNumber('Uint8');
        }

    }



    async getChunk(cx: number, cz: number): Promise<Chunk | null> {

        const ind = cx + cz * REGION_CHUNK_SIZE;

        const offset = this.offsets[ind] * REGION_CHUNK_SECTOR_SIZE;
        const length = this.lengths[ind] * REGION_CHUNK_SECTOR_SIZE;

        if(offset == 0 || length == 0) return null;

        const reader = new DataReader(await (await this.file.blob()).slice(offset, offset + length).arrayBuffer());
        reader.endianness = DataReader.BIG_ENDIAN;

        const compressedLength = reader.readNumber('Uint32');
        const compressionMethod = reader.readNumber('Uint8');

        if(compressionMethod != 2) {
            throw new Error('Invalid chunk compression method.');
        }

        const nbt = simpleNBTObj(
            convertNBT(
                pako.inflate(
                    reader.readBuffer(compressedLength - 1)
                )
            )
        );

        return new Chunk(nbt);

    }
}



export class World {
    dir: fsDirectory;

    constructor(dir: fsDirectory) {
        this.dir = dir;
    }

    async getRegion(rx: number, rz: number): Promise<Region | null> {

        const file = await fsUtils.getDeep(this.dir, `region/r.${rx}.${rz}.mca`);

        if(file == null || file.type != fsEntry.File) return null;

        return new Region(file);

    }
}


