
/*

    The Ren'Py archive file format is extremely simple and primitive.

    https://github.com/renpy/renpy/blob/master/launcher/game/archiver.rpy
    https://github.com/renpy/renpy/blob/master/renpy/loader.py#L114

    The format (simplified) is as follows:
        Header
        ...File Contents
        File List

        The header is string "RPA-X.X XXXXXXXXXXXXXXXX XXXXXXXX\n"
        With the first X.X being the archive version. (Usually 3.0)
        The second XXXXXXXXXXXXXXXX being file list offset as hex string.
        The third XXXXXXXX being the key xor as hex string for file list file offset & length. (Some primitive kind of encryption?)

        The file contents is raw file contents, Every file has "Made with Ren'Py." prefixed,
        The prefix may be ignored as the file offset in file list does not include it.

        The file list is a python pickle with DEFLATE compression.
        The depickled object should look something like this:
            {
                'path/to/file.txt': [ offset ^ key, length ^ key, buffer(0) ][]
                ...
            }
        The files may have multiple parts split across the file.
        each part is combined to make the whole file.
        The empty buffer seems to never be used. (Even looking at Ren'Py source code, it's always empty anyways.)



    Currently the main slowdown about this code is depickling, could easily speed up depickling x2 but I'm too lazy and I like to keep everything clean.
    But if anyone wants to redo the depickle code while keeping it clean that would be very nice :)

*/

import { DataReader } from "$lib/DataReader";
import Pako from "pako";
import { Depickler } from "./depickle";
import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";



const FILE_PADDING = `Made with Ren'Py.`;
const ARCHIVE_HEADER_SIZE = 34;
const ARCHIVE_HEADER_SIGNATURE = `RPA-3.0`;



type Section = {
    offset: number;
    length: number;
}



class ArchiveFile implements fsFile {
    public type: fsEntry.File = fsEntry.File;
    public viewer: Viewer | null = null;
    public name: string;
    public parent: fsDirectory | null;

    private _blob: Blob;
    private sections: Section[];

    constructor(blob: Blob, sections: Section[], name: string, parent: fsDirectory | null) {
        this._blob = blob;
        this.sections = sections;
        this.name = name;
        this.parent = parent;
    }

    async blob(): Promise<Blob> {
        return new Blob(this.sections.map(section => this._blob.slice(section.offset, section.offset + section.length)));
    }

    async buffer(): Promise<ArrayBuffer> {
        return await (await this.blob()).arrayBuffer()
    }

}



export class ArchiveReader extends DataReader {

    blob: Blob;
    blobPointer: number = 0;
    get blobLength() {
        return this.blob.size;
    }
    get blobEof() {
        return this.blobPointer >= this.blobLength;
    }
    get blobDataLeft() {
        return this.blobLength - this.blobPointer;
    }

    key: number = -1;

    constructor(blob: Blob) {
        super();
        this.blob = blob;
    }

    getSlice(length: number, at: number = this.blobPointer): Blob {
        this.blobPointer = at;

        const slice = this.blob.slice(this.blobPointer, this.blobPointer + length);
        this.blobPointer += length;

        return slice;
    }

    async load(length: number, at: number = this.blobPointer): Promise<void> {

        this.loadData(await this.getSlice(length, at).arrayBuffer());

    }

    decodeWithKey(value: number): number {
        if(value <= 0xFFFFFFFF) {
            return value ^ this.key;
        } else {
            // The xor only includes the first 32 bits, The rest is ignored.
            return Number(BigInt(value) ^ BigInt(this.key));
        }
    }



    /**
     * @returns Index offset  
     */
    async readHeader(): Promise<number> {

        await this.load(ARCHIVE_HEADER_SIZE);

        const string = this.readString(this.dataLeft);

        if(!string.endsWith('\n')) {
            throw new Error('ArchiveReader.readHeader: Archive header does not end with newline.');
        }

        const split = string.split(' ');

        if(split.length != 3) {
            throw new Error(`ArchiveReader.readHeader: Invalid header.`);
        }

        if(split[0] != ARCHIVE_HEADER_SIGNATURE) {
            throw new Error(`ArchiveReader.readHeader: Signature does not match. got: ${split[0]} expected: ${split[1]}`);
        }

        const indexOffset = Number.parseInt(split[1], 16);
        if(Number.isNaN(indexOffset)) {
            throw new Error(`ArchiveReader.readHeader: Index offset is invalid.`);
        }

        this.key = Number.parseInt(split[2], 16);
        if(Number.isNaN(this.key)) {
            throw new Error(`ArchiveReader.readHeader: Key is invalid.`);
        }

        return indexOffset;

    }

    async readArchive(): Promise<fsDirectory> {

        const indexOffset = await this.readHeader();

        this.blobPointer = indexOffset;
        await this.load(this.blobDataLeft);
        const buffer = this.buffer;
        const decompressed = Pako.inflate(buffer);
        const depickled = Depickler.depickle(decompressed, {
            downcastLongs: true
        });



        const dir = new fsUtils.fsDirectory_Container('UNSET', null);
        const files = depickled[0] as {[key: string]: [ number, number, Uint8Array ][]};

        for(const [ path, fileDatas ] of Object.entries(files)) {

            const sections: Section[] = fileDatas.map(fileData => {
                return {
                    offset: this.decodeWithKey(fileData[0]),
                    length: this.decodeWithKey(fileData[1])
                }
            });

            const name = path.split('/').pop();
            if(name == null) {
                throw new Error('Catastrophic error that should never happen.');
            }

            const file = new ArchiveFile(this.blob, sections, name, null);

            // TODO: Implement setDeep in here so we can set entries asynchronously
            // Currently we cannot if we do, some setDeep calls may clash and overwrite one another.
            await fsUtils.setDeep(dir, path, file);

        }



        return dir;

    }

}