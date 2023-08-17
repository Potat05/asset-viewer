import { DataReader } from "$lib/DataReader";
import { fsUtils, type fsDirectory, type fsFile, fsEntry } from "$lib/FileSystem";
import pako from "pako";
import { convertNBT, simpleNBTObj } from "./nbt";





export class Chunk {
    data: unknown;

    constructor(data: unknown) {
        this.data = data;
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



    async getChunk(cx: number, cy: number): Promise<Chunk | null> {

        const ind = cx + cy * REGION_CHUNK_SIZE;

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

        console.log(compressedLength, compressionMethod)

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

    async getRegion(rx: number, ry: number): Promise<Region | null> {

        const file = await fsUtils.getDeep(this.dir, `region/r.${rx}.${ry}.mca`);

        if(file == null || file.type != fsEntry.File) return null;

        return new Region(file);

    }
}


