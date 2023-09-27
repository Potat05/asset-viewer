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



const VPK_NAME_REGEX = /(.+)_(dir|\d+).vpk/;



export async function readVpk(file: fsFile, lowerPaths: boolean = false): Promise<{ vpk: fsDirectory, from: fsFile[] }> {

    // Locate all vpk files for this archive.

    let dirName: string;
    let dirParent: fsDirectory | null;
    let dir: Blob;
    let files: {[key: number]: Blob} = {};

    let from: fsFile[] = [];

    // Filename tells us if this vpk has multiple archive files.
    if(VPK_NAME_REGEX.test(file.name)) {
        // VPK has multiple archive files.

        const parent = file.parent;
        if(!parent) {
            throw new Error('VPK with multiple files MUST have parent.');
        }

        const vpkName = file.name.match(VPK_NAME_REGEX)?.[1];
        if(!vpkName) {
            throw new Error('VPK invalid name.');
        }

        const list = await parent.list();
        for(const [ name, entry ] of Object.entries(list)) {
            if(entry.type != fsEntry.File) continue;
            if(!VPK_NAME_REGEX.test(name)) continue;

            const match = name.match(VPK_NAME_REGEX);
            if(!match) continue;

            const archiveName = match[1];
            if(!archiveName) continue;
            if(archiveName != vpkName) continue;

            const archiveID = match[2];
            if(!archiveID) continue;

            if(archiveID == 'dir') {
                dirName = entry.name;
                dirParent = entry.parent;
                dir = await entry.blob();
                from.push(entry);
                continue;
            } else {
                const num = parseInt(archiveID);
                if(!Number.isNaN(num)) {
                    files[num] = await entry.blob();
                    from.push(entry);
                    continue;
                }
            }

            throw new Error('Invalid archive ID')

        }

        // @ts-ignore
        if(!dir || !dirName || dirParent === undefined) {
            throw new Error('VPK unable to find dir.');
        }

    } else {
        // VPK has only 1 archive file.
        dirName = file.name;
        dirParent = file.parent;
        dir = await file.blob();
        from.push(file);
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



    const vpk = new fsUtils.fsDirectory_Container(dirName, dirParent);



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



    return { vpk, from };

}


