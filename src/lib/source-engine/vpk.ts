import { BlobReader } from "$lib/BlobReader";
import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";



type VpkFileOptions = {
    offset: number;
    length: number;
    preload?: ArrayBuffer;
}



class VpkFile implements fsFile {
    viewer: Viewer | null = null;

    public readonly type: fsEntry.File = fsEntry.File;
    public readonly name: string;
    public parent: fsDirectory | null;

    private arciveFile: Blob;
    private options: VpkFileOptions;

    constructor(archiveFile: Blob, options: VpkFileOptions, name: string, parent: fsDirectory | null) {
        this.arciveFile = archiveFile;
        this.options = options;
        this.name = name;
        this.parent = parent;
    }

    private loadedBlob: Blob | null = null;

    public async blob(): Promise<Blob> {

        if(this.loadedBlob != null) return this.loadedBlob;

        const slice = this.arciveFile.slice(this.options.offset, this.options.offset + this.options.length);
        const blob = this.options.preload !== undefined ? new Blob([ this.options.preload, slice ]) : slice

        this.loadedBlob = blob;

        return this.loadedBlob;

    }

    public async buffer(): Promise<ArrayBuffer> {
        return await (await this.blob()).arrayBuffer();
    }

}



export async function readVpk(file: fsFile, lowerPaths: boolean = false): Promise<fsDirectory> {

    // Locate all vpk files for this archive.

    let dir: Blob;
    let files: {[key: number]: Blob} = {};

    // Filename tells us if this vpk has multiple archive files.
    if(/_(?:dir|\d+)\.vpk$/.test(file.name)) {
        // VPK has multiple archive files.

        throw new Error('VPK TODO: Multiple archive files.');

    } else {
        // VPK has only 1 archive file.
        dir = await file.blob();
    }



    const reader = new BlobReader(dir);


    // Read header
    await reader.load(12);

    reader.assertMagic(0x55aa1234, 'Uint32');
    const version = reader.readNumber('Uint32');
    const treeSize = reader.readNumber('Uint32');

    if(version == 1) {
        
    } else if(version == 2) {
        // Version 2 header
        // const fileDataSectionSize = reader.readNumber('Uint32');
        // const archiveMD5SectionSize = reader.readNumber('Uint32');
        // const otherMD5SectionSize = reader.readNumber('Uint32');
        // const signatureSectionSize = reader.readNumber('Uint32');
        reader.blobPointer += 16;
    } else {
        throw new Error(`Invalid VPK version. got: ${version}, expected 1 or 2.`);
    }

    const dirEnd = reader.blobPointer + treeSize;



    const vpk = new fsUtils.fsDirectory_Container(file.name, file.parent);



    // Read file tree
    await reader.load(treeSize);

    let extension: string;
    let path: string;
    let filename: string;
    while(extension = reader.readNullString()) {
        while(path = reader.readNullString()) {
            while(filename = reader.readNullString()) {

                const crc32 = reader.readNumber('Uint32');
                const preloadBytes = reader.readNumber('Uint16');
                const archiveIndex = reader.readNumber('Uint16');
                let offset = reader.readNumber('Uint32');
                const length = reader.readNumber('Uint32');

                reader.assertMagic(0xFFFF, 'Uint16');

                if(archiveIndex == 0x7FFF) {
                    offset += dirEnd;
                }

                const archiveFile = archiveIndex == 0x7FFF ? dir : files[archiveIndex];
                const vpkFile = new VpkFile(
                    archiveFile,
                    preloadBytes == 0 ? { offset, length } : { offset, length, preload: reader.readBuffer(preloadBytes) },
                    `${filename}.${extension}`,
                    null
                );

                await fsUtils.setDeep(vpk, `${path}/${filename}.${extension}`, vpkFile);

            }
        }
    }



    return vpk;

}


