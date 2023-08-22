
import { BlobReader } from "./BlobReader";
import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "./FileSystem";
import type { Viewer } from "./Viewer";
import * as pako from "pako";



enum Zip_PkSection {
    CentralDirEntry = 513,
    LocalFile = 1027,
    EndOfCentralDir = 1541,
    DataDescriptor = 2055
}

enum Compression {
    none = 0,
    shrunk = 1,
    reduced_1 = 2,
    reduced_2 = 3,
    reduced_3 = 4,
    reduced_4 = 5,
    imploded = 6,
    deflated = 8,
    enhanced_deflated = 9,
    pkware_dcl_imploded = 10,
    bzip2 = 12,
    lzma = 14, // TODO - Implement this compression, it is still very used and should be implemented.
    ibm_terse = 18,
    ibm_lz77_z = 19,
    zstandard = 93,
    mp3 = 94,
    xz = 95,
    jpeg = 96,
    wavpack = 97,
    ppmd = 98,
    aex_encryption_marker = 99,
}



class ZipFile implements fsFile {
    public viewer: null | Viewer = null;

    public readonly type: fsEntry.File = fsEntry.File;
    public readonly name: string;
    public parent: fsDirectory | null;

    private zip: Blob;
    private offset: number;
    private compressedSize: number;
    private uncompressedSize: number;
    private compressionMethod: number;

    constructor(zip: Blob, offset: number, compressedSize: number, uncompressedSize: number, compressionMethod: number, name: string, parent: fsDirectory | null = null) {
        this.zip = zip;
        this.offset = offset;
        this.compressedSize = compressedSize;
        this.uncompressedSize = uncompressedSize;
        this.compressionMethod = compressionMethod;
        this.name = name;
        this.parent = parent;
    }

    private loadedBlob: Blob | null = null;

    public async blob(): Promise<Blob> {

        if(this.loadedBlob != null) return this.loadedBlob;

        const slice = this.zip.slice(this.offset, this.offset + this.compressedSize);

        switch(this.compressionMethod) {

            case Compression.none: {
                
                this.loadedBlob = slice;

                break; }

            case Compression.deflated: {

                const buffer = await slice.arrayBuffer();
                const inflated = pako.inflateRaw(buffer);
                this.loadedBlob = new Blob([ inflated ]);

                break; }

            default:
                throw new Error('Unknown zip file compression method.');

        }

        if(this.loadedBlob == null) {
            throw new Error('Could not decompress zip file.');
        }

        return this.loadedBlob;

    }

    public async buffer(): Promise<ArrayBuffer> {
        return await (await this.blob()).arrayBuffer();
    }

}



export async function readZip(file: fsFile): Promise<fsDirectory> {

    const blob = await file.blob();

    const reader = new BlobReader(blob);

    const dir = new fsUtils.fsDirectory_Container(file.name, file.parent);

    while(!reader.blobEof) {
        
        await reader.load(4);
        
        reader.assertMagic('PK');
        
        const sectionType = reader.readNumber('Uint16');
        
        switch(sectionType) {

            case Zip_PkSection.CentralDirEntry: {

                await reader.load(42);

                const versionMadeBy = reader.readNumber('Uint16');
                const versionNeededToExtract = reader.readNumber('Uint16');
                const flags = reader.readNumber('Uint16');
                const compressionMethod = reader.readNumber('Uint16');
                const fileModTime = reader.readNumber('Uint32');
                const crc32 = reader.readNumber('Uint32');
                const sizeCompressed = reader.readNumber('Uint32');
                const sizeUncompressed = reader.readNumber('Uint32');
                const filenameLength = reader.readNumber('Uint16');
                const extraLength = reader.readNumber('Uint16');
                const commentLength = reader.readNumber('Uint16');
                const diskNumberStart = reader.readNumber('Uint16');
                const intFileAttr = reader.readNumber('Uint16');
                const extFileAttr = reader.readNumber('Uint32');
                const offsetData = reader.readNumber('Uint32');

                await reader.load(filenameLength + extraLength + commentLength);

                const filepath = reader.readString(filenameLength, 'utf-8');
                const extra = reader.readBuffer(extraLength);
                const comment = reader.readString(commentLength, 'utf-8');

                break; }

            case Zip_PkSection.LocalFile: {

                await reader.load(26);

                const version = reader.readNumber('Uint16');
                const flags = reader.readNumber('Uint16');
                const compressionMethod = reader.readNumber('Uint16');
                const fileModTime = reader.readNumber('Uint32');
                const crc32 = reader.readNumber('Uint32');
                const sizeCompressed = reader.readNumber('Uint32');
                const sizeUncompressed = reader.readNumber('Uint32');
                const filenameLength = reader.readNumber('Uint16');
                const extraLength = reader.readNumber('Uint16');

                await reader.load(filenameLength + extraLength);

                const filepath = reader.readString(filenameLength, 'utf-8');
                const extra = reader.readBuffer(extraLength);

                const offsetData = reader.blobPointer;

                const filename = filepath.split('/').pop();

                if(filename == null) {
                    throw new Error('Failed to read filename in zip file.');
                }

                if(sizeCompressed > 0) {
                    const file = new ZipFile(blob, offsetData, sizeCompressed, sizeUncompressed, compressionMethod, filename);
                    await fsUtils.setDeep(dir, filepath, file);
                }

                reader.blobPointer += sizeCompressed;

                break; }

            case Zip_PkSection.DataDescriptor: {

                reader.blobPointer += 12;

                break; }

            case Zip_PkSection.EndOfCentralDir: {

                return dir;

                break; }

            default:
                throw new Error(`Invalid ZIP section type. ${sectionType} at ${reader.blobPointer - 2}`);
            
        }

    }

    return dir;

}
