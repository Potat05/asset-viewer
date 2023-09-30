
import { BlobReader } from "./BlobReader";
import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "./FileSystem";
import type { Viewer } from "./Viewer";
import * as pako from "pako";
import * as lzma from "./codecs/lzma";
import { DataReader } from "./DataReader";
import { NumberUtils } from "./NumberUtils";



enum Zip_PkSection {
    CentralDirEntry = 513,
    LocalFile = 1027,
    EndOfCentralDir = 1541,
    EndOfCentralDir64 = 1542,
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
    lzma = 14,
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

const ZIP_END_IDENT = 0x4B50 | (Zip_PkSection.EndOfCentralDir << 16);
const ZIP64_END_IDENT = 0x4B50 | (Zip_PkSection.EndOfCentralDir64 << 16);

enum Zip_Extra {
    Zip64ExtendedInformation = 0x0001
}



type ZipFileOptions = {
    type: 'fileheader',
    compressionMethod: number;
    offset: number;
    compressedSize: number;
    uncompressedSize: number;
} | {
    type: 'centralfileheader',
    offsetToLocalHeader: number;
}

class ZipFile implements fsFile {
    public viewer: null | Viewer = null;

    public readonly type: fsEntry.File = fsEntry.File;
    public readonly name: string;
    public parent: fsDirectory | null;

    private zip: Blob;
    private options: ZipFileOptions;

    constructor(zip: Blob, options: ZipFileOptions, name: string, parent: fsDirectory | null = null) {
        this.zip = zip;
        this.options = options;
        this.name = name;
        this.parent = parent;
    }

    private loadedBlob: Blob | null = null;

    public async blob(): Promise<Blob> {

        if(this.loadedBlob != null) return this.loadedBlob;


        let compressionMethod: number;
        let offset: number;
        let compressedSize: number;
        let uncompressedSize: number;

        if(this.options.type == 'fileheader') {
            compressionMethod = this.options.compressionMethod;
            offset = this.options.offset;
            compressedSize = this.options.compressedSize;
            uncompressedSize = this.options.uncompressedSize;
        } else if(this.options.type == 'centralfileheader') {

            const reader = new BlobReader(this.zip);

            await reader.load(30, this.options.offsetToLocalHeader);
            reader.assertMagic('PK');
            reader.assertMagic(Zip_PkSection.LocalFile, 'Uint16');
            const version = reader.readNumber('Uint16');
            const flags = reader.readNumber('Uint16');
            compressionMethod = reader.readNumber('Uint16');
            const fileModTime = reader.readNumber('Uint32');
            const crc32 = reader.readNumber('Uint32');
            compressedSize = reader.readNumber('Uint32');
            uncompressedSize = reader.readNumber('Uint32');
            const filenameLength = reader.readNumber('Uint16');
            const extraLength = reader.readNumber('Uint16');

            await reader.load(filenameLength + extraLength);

            const filepath = reader.readString(filenameLength, 'utf-8');
            const extra = reader.readBuffer(extraLength);

            offset = reader.blobPointer;

        } else {
            throw new Error('Zip file invalid options.');
        }



        if(compressionMethod != Compression.none) {
            console.debug(`Decompressing file ${this.name} with ${Compression[compressionMethod] ?? NumberUtils.hex(compressionMethod, 2)} compression method`);
        }

        const slice = this.zip.slice(offset, offset + compressedSize);

        switch(compressionMethod) {

            case Compression.none: {
                
                this.loadedBlob = slice;

                break; }

            case Compression.deflated: {

                const buffer = await slice.arrayBuffer();
                const inflated = pako.inflateRaw(buffer);
                this.loadedBlob = new Blob([ inflated ]);

                break; }

            case Compression.lzma: {

                const buffer = await slice.arrayBuffer();
                
                const reader = new DataReader(buffer);

                const versionMajor = reader.readNumber('Uint8');
                const versionMinor = reader.readNumber('Uint8');

                const propsLength = reader.readNumber('Uint16');

                const props = reader.readBuffer(propsLength);

                const uncompressed = lzma.decompress(
                    reader.readBuffer(reader.dataLeft),
                    lzma.decodeLZMAProperties(props),
                    uncompressedSize
                );

                this.loadedBlob = new Blob([ uncompressed ]);

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



async function locateEndOfCentralDir(file: Blob, scanFor: number): Promise<number> {

    // Zip file may have comment with max length of 0xFFFF

    const START_SIZE = 128;
    const MAX_SIZE = 65536 + 22;

    const scans = [
        { start: Math.max(0, file.size - START_SIZE), end: file.size },
        { start: Math.max(0, file.size - MAX_SIZE), end: file.size },
    ];

    for(const scan of scans) {

        const slice = file.slice(scan.start, scan.end);

        const view = new DataView(await slice.arrayBuffer());

        for(let i = view.byteLength - 4; i > 0; i--) {

            if(view.getUint32(i, true) == scanFor) {
                return file.size - (scan.end - scan.start) + i;
            }

        }

    }

    return -1;

}



export async function readZip(blob: Blob, name: string, parent: fsDirectory | null, lowerPaths: boolean = false): Promise<fsDirectory> {

    const reader = new BlobReader(blob);

    const dir = new fsUtils.fsDirectory_Container(name, parent);



    const transformPath: (path: string) => string = (lowerPaths ? path => path.toLowerCase() : path => path);




    if(blob.size <= 0xFFFFFFFF) {
        // File is ZIP

        const endOfCentralDirPointer = await locateEndOfCentralDir(blob, ZIP_END_IDENT);
    
        if(endOfCentralDirPointer == -1) {
    
            // Zip has no central directory.
            // We have to skip through the file reading each entry manually.
            // which is EXTREMELY slow in js with blobs.
    
            console.warn('Reading ZIP file without central directory.');
        
            while(!reader.blobEof) {
                
                await reader.load(4);
                
                if(!reader.magic('PK')) {
                    console.warn(`Invalid ZIP section type header. at ${reader.blobPointer - 2}`);
                    return dir;
                }
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
                        const offsetToLocalFileHeader = reader.readNumber('Uint32');
        
                        await reader.load(filenameLength + extraLength + commentLength);
        
                        const filepath = transformPath(reader.readString(filenameLength, 'utf-8'));
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
        
                        const filepath = transformPath(reader.readString(filenameLength, 'utf-8'));
                        const extra = reader.readBuffer(extraLength);
        
                        const offsetData = reader.blobPointer;
        
                        const filename = filepath.split('/').pop();
        
                        if(filename == null) {
                            throw new Error('Failed to read filename in zip file.');
                        }
        
                        if(sizeCompressed > 0) {
                            const file = new ZipFile(blob, {
                                type: 'fileheader',
                                compressionMethod: compressionMethod,
                                offset: reader.blobPointer,
                                compressedSize: sizeCompressed,
                                uncompressedSize: sizeUncompressed
                            }, filename);
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
        
                    default: {
    
                        console.warn(`Invalid ZIP section type. ${sectionType} at ${reader.blobPointer - 2}`);
                        return dir;
    
                        break; }
                    
                }
        
            }
    
        } else {
    
            // Zip has central directory.
            // Reading is very fast without skipping through the whole file.
    
            // End of central directory
            await reader.load(22, endOfCentralDirPointer);
            reader.assertMagic('PK');
            reader.assertMagic(Zip_PkSection.EndOfCentralDir, 'Uint16');
            const disk = reader.readNumber('Uint16');
            const diskWithStart = reader.readNumber('Uint16');
            const numEntriesOnThisDisk = reader.readNumber('Uint16');
            const numEntries = reader.readNumber('Uint16');
            const centralDirectorySize = reader.readNumber('Uint32');
            const centralDirectoryOffset = reader.readNumber('Uint32');
            const commentLength = reader.readNumber('Uint16');
            await reader.load(commentLength);
            const comment = reader.readString(reader.dataLeft);
    
            // Central directory entries
            await reader.load(centralDirectorySize, centralDirectoryOffset);
    
            while(!reader.eof) {
    
                reader.assertMagic('PK');
                reader.assertMagic(Zip_PkSection.CentralDirEntry, 'Uint16');
        
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
                const offsetToLocalFileHeader = reader.readNumber('Uint32');
    
                const filepath = transformPath(reader.readString(filenameLength, 'utf-8'));
                const extra = reader.readBuffer(extraLength);
                const comment = reader.readString(commentLength, 'utf-8');
    
                const filename = filepath.split('/').pop();
        
                if(filename == null) {
                    throw new Error('Failed to read filename in zip file.');
                }
    
                if(sizeCompressed > 0) {
                    const file = new ZipFile(blob, {
                        type: 'centralfileheader',
                        offsetToLocalHeader: offsetToLocalFileHeader
                    }, filename);
                    await fsUtils.setDeep(dir, filepath, file);
                }
    
            }
    
        }

    } else {
        // File is ZIP64

        console.warn('ZIP64 files not yet supported.');

        const endOfCentralDirPointer = await locateEndOfCentralDir(blob, ZIP64_END_IDENT);

        if(endOfCentralDirPointer == -1) {
            throw new Error('ZIP64 Must include end of central directory.');
        }

        // End of central directory
        await reader.load(12, endOfCentralDirPointer);
        reader.assertMagic('PK');
        reader.assertMagic(Zip_PkSection.EndOfCentralDir64, 'Uint16');
        const sizeOfEndOfCentralDirectory = reader.readBigNumber('BigUint64');
        await reader.load(Number(sizeOfEndOfCentralDirectory));
        const versionMadeBy = reader.readNumber('Uint16');
        const versionNeeded = reader.readNumber('Uint16');
        const disk = reader.readNumber('Uint32');
        const diskWithStart = reader.readNumber('Uint32');
        const numEntriesOnThisDisk = reader.readBigNumber('BigUint64');
        const numEntries = reader.readBigNumber('BigUint64');
        const centralDirectorySize = reader.readBigNumber('BigUint64');
        const centralDirectoryOffset = reader.readBigNumber('BigUint64');
        const comment = reader.readString(reader.dataLeft);

        // Central directory entries
        await reader.load(Number(centralDirectorySize), Number(centralDirectoryOffset));

        while(!reader.eof) {

            reader.assertMagic('PK');
            reader.assertMagic(Zip_PkSection.CentralDirEntry, 'Uint16');
    
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
            const offsetToLocalFileHeader = reader.readNumber('Uint32');

            const filepath = transformPath(reader.readString(filenameLength, 'utf-8'));
            const extra = reader.readBuffer(extraLength);
            const comment = reader.readString(commentLength, 'utf-8');



            const extraReader = new DataReader(extra);
            const extras = extraReader.readArrayUntilEnd(() => {
                const id = extraReader.readNumber('Uint16');
                const size = extraReader.readNumber('Uint16');
                switch(id) {
                    case Zip_Extra.Zip64ExtendedInformation:
                        return {
                            id,
                            sizeUncompressed: extraReader.readBigNumber('BigUint64'),
                            sizeCompressed: extraReader.readBigNumber('BigUint64'),
                            offsetToLocalFileHeader: extraReader.readBigNumber('BigUint64'),
                            // diskNumberStart: extraReader.readNumber('Uint32'),
                            data: extraReader.readBuffer(size - 24)
                        }
                    default:
                        return {
                            id,
                            data: extraReader.readBuffer(size)
                        }
                }
            });



            const zip64offsetToLocalFileHeader = Number(extras.find(e => e.id == Zip_Extra.Zip64ExtendedInformation)?.offsetToLocalFileHeader ?? offsetToLocalFileHeader);
            


            const filename = filepath.split('/').pop();
    
            if(filename == null) {
                throw new Error('Failed to read filename in zip file.');
            }

            if(sizeCompressed > 0) {
                const file = new ZipFile(blob, {
                    type: 'centralfileheader',
                    offsetToLocalHeader: Number(zip64offsetToLocalFileHeader)
                }, filename);
                await fsUtils.setDeep(dir, filepath, file);
            }

        }

    }

    

    return dir;

}
