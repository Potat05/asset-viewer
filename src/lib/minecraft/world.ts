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
        block_states: zod.optional(zod.object({
            palette: zod.array(BlockState),
            data: zod.optional(zod.instanceof(BigInt64Array))
        }))
    })),
    block_entities: zod.array(zod.object({
        x: zod.number().int(),
        y: zod.number().int(),
        z: zod.number().int(),
        id: zod.string()
    }))
});




type Section = {
    y: number;
} & ({
    type: 'unset'
} | {
    type: 'empty';
} | {
    type: 'fill';
    fill: zod.TypeOf<typeof BlockState>;
} | {
    type: 'blocks';
    blocks: zod.TypeOf<typeof BlockState>[];
});


export class Chunk {
    data: zod.TypeOf<typeof ChunkData>;

    cx: number;
    cz: number;

    sections: Section[];

    constructor(data: unknown) {
        this.data = ChunkData.parse(data);
        this.cx = this.data.xPos;
        this.cz = this.data.zPos;
        this.sections = new Array(this.data.sections.length);
        for(let i = 0; i < this.data.sections.length; i++) {
            this.sections[i] = {
                y: this.data.sections[i].Y * 16,
                type: 'unset'
            }
        }
    }

    deserializeSection(ind: number) {
        if(this.sections[ind].type != 'unset') return;

        const section = this.data.sections[ind].block_states;
        if(section == undefined) {
            this.sections[ind] = {
                y: this.sections[ind].y,
                type: 'empty'
            }
            return;
        }
        const data = section.data;

        if(section.palette.length == 0) {
            this.sections[ind] = {
                y: this.sections[ind].y,
                type: 'fill',
                fill: BLOCK_AIR
            }
            return;
        }
        if(section.palette.length == 1 || data == undefined) {
            this.sections[ind] = {
                y: this.sections[ind].y,
                type: 'fill',
                fill: section.palette[0]
            }
            return;
        }

        // TODO - Deserializing a section with more than 4 bits glitches out.
        const numBits = Math.max(Math.ceil(Math.log2(section.palette.length)), 4);
        const mask = BigInt((1 << numBits) - 1);

        const deserialized = new Array(4096);

        let dataIndex = 0;
        let bitIndex = 0;
        for(let b = 0; b < 4096; b++) {

            const paletteIndex = Number((data[dataIndex] >> BigInt(bitIndex)) & mask);
            if(paletteIndex >= section.palette.length) {
                throw new Error(`Error while deserializing section, palette index {${paletteIndex}} is outside of palette {${section.palette.length}}.`);
            }

            deserialized[b] = section.palette[paletteIndex];

            bitIndex += numBits;
            if(bitIndex >= 64) {
                bitIndex = 0;
                dataIndex++;
            }

        }

        this.sections[ind] = {
            y: this.sections[ind].y,
            type: 'blocks',
            blocks: deserialized
        }

    }

    getSection(ind: number): Section | null {
        if(this.sections[ind] == undefined) return null;

        if(this.sections[ind].type == 'unset') {
            this.deserializeSection(ind);
        }

        return this.sections[ind];
    }

    static getBlockSectionIndex(x: number, y: number, z: number): number {
        return ((y & 0xF) << 8) | ((z & 0xF) << 4) | (x & 0xF);
    }

    getBlock(bx: number, by: number, bz: number): zod.TypeOf<typeof BlockState> {

        if(bx < 0 || bx >= 16 || bz < 0 || bz >= 16) return BLOCK_AIR;

        const sectionIndex = this.sections.findIndex(section => by >= section.y && by < section.y + 16);
        const section = this.getSection(sectionIndex);

        if(section == null) return BLOCK_AIR;

        switch(section.type) {
            case 'unset':
                throw new Error('Deserialization failed.');
            case 'empty': return BLOCK_AIR;
            case 'fill': return section.fill;
            case 'blocks': {
                const blockIndex = Chunk.getBlockSectionIndex(bx, by, bz);
                                
                const block = section.blocks[blockIndex];

                return block;
            }
        }

    }

    /**
     * @param callbackfn Only callbacks for every non-air block.
     */
    forEachBlock(callbackfn: (bx: number, by: number, bz: number, block: zod.TypeOf<typeof BlockState>) => void) {

        for(let i = 0; i < this.sections.length; i++) {

            const section = this.getSection(i);

            if(section == null) {
                throw new Error('Failed to get section.');
            }

            switch(section.type) {
                case 'unset':
                    throw new Error('Deserialization failed.');
                case 'empty': break;
                case 'fill': {
                    const block = section.fill;

                    if(block.Name == BLOCK_AIR.Name) break;

                    for(let sx = 0; sx < 16; sx++) {
                        for(let sy = 0; sy < 16; sy++) {
                            for(let sz = 0; sz < 16; sz++) {
                                callbackfn(sx, section.y + sy, sz, block);
                            }
                        }
                    }
                    break; }
                case 'blocks': {

                    for(let sx = 0; sx < 16; sx++) {
                        for(let sy = 0; sy < 16; sy++) {
                            for(let sz = 0; sz < 16; sz++) {
                                const blockIndex = Chunk.getBlockSectionIndex(sx, sy, sz);
                                
                                const block = section.blocks[blockIndex];

                                if(block.Name == BLOCK_AIR.Name) continue;

                                callbackfn(sx, section.y + sy, sz, block);
                            }
                        }
                    }
                    break; }
            }

        }

    }

}



const REGION_CHUNK_SIZE = 32;
const REGION_CHUNK_COUNT = REGION_CHUNK_SIZE * REGION_CHUNK_SIZE;
const REGION_CHUNK_SECTOR_SIZE = 4096;

export class Region {
    file: fsFile;

    rx: number;
    rz: number;

    constructor(file: fsFile, rx: number, rz: number) {
        this.file = file;

        this.rx = rx;
        this.rz = rz;
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

        const ind = (cx & 0x1F) + (cz & 0x1F) * REGION_CHUNK_SIZE;
        
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

        return new Region(file, rx, rz);

    }
}


