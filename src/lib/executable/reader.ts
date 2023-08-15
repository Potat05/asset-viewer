
import { BlobReader } from "$lib/BlobReader";



export interface DosHeader {
    bytesOnLastPageOfFile: number;
    pagesInFile: number;
    relocations: number;
    sizeOfHeaderParagraphs: number;
    minExtraParagraphsNeeded: number;
    maxExtraParagraphsNeeded: number;
    initialRelSSValue: number;
    initialSPValue: number;
    checksum: number;
    initialIPValue: number;
    initialRelCSValue: number;
    fileAddressOfRelocationTable: number;
    overlayNumber: number;
    reserved1: ArrayBuffer;
    OEMIdentifier: number;
    OEMInformation: number;
    reserved2: ArrayBuffer;
    fileAddressOfNewExeHeader: number;
}



export interface FileHeader {
    machine: number;
    sectionsCount: number;
    timeDateStamp: number;
    ptrToSymbolTable: number;
    numSymbols: number;
    sizeOfOptionalHeader: number;
    characteristics: number;
}



interface OffsetSize {
    offset: number;
    size: number;
}



export enum OptionalHeaderTypes {
    NT32 = 0x010B,
    NT64 = 0x020B
}



export interface OptionalHeaders {
    [OptionalHeaderTypes.NT32]: {
        type: 'NT32';
        linkerVerMajor: number;
        linkerVerMinor: number;
        sizeOfCode: number;
        sizeOfInitializedData: number;
        sizeOfUninitializedData: number;
        entryPoint: number;
        baseOfCode: number;
        baseOfData: number;
        imageBase: number;
        sectionAlignment: number;
        fileAlignment: number;
        osVerMajor: number;
        osVerMinor: number;
        imageVerMajor: number;
        imageVerMinor: number;
        subSystemVerMajor: number;
        subSystemVerMinor: number;
        win32VersionValue: number;
        sizeOfImage: number;
        sizeOfHeaders: number;
        _checksum: number;
        subSystem: number;
        dllCharacteristics: number;
        sizeOfStackReserve: number;
        sizeOfStackCommit: number;
        sizeOfHeapReserve: number;
        sizeOfHeapCommit: number;
        loaderFlags: number;
        numberOfRVAsAndSizes: number;

        exportDirectory: OffsetSize;
        importDirectory: OffsetSize;
        resourceDirectory: OffsetSize;
        exceptionDirectory: OffsetSize;
        securityDirectory: OffsetSize;
        baseRelocationTable: OffsetSize;
        debugDirectory: OffsetSize;
        architectureSpecificData: OffsetSize;
        RVAOfGlobalPTR: OffsetSize;
        TLSDirectory: OffsetSize;
        loadConfigurationDirectory: OffsetSize;
        boundImportDirectory: OffsetSize;
        importAddressTable: OffsetSize;
        delayLoadImportDescriptors: OffsetSize;
        netHeader: OffsetSize;
    };
    [OptionalHeaderTypes.NT64]: {
        type: 'NT64';
        linkerVerMajor: number;
        linkerVerMinor: number;
        sizeOfCode: number;
        sizeOfInitializedData: number;
        sizeOfUninitializedData: number;
        entryPoint: number;
        baseOfCode: number;
        imageBase: bigint;
        sectionAlignment: number;
        fileAlignment: number;
        osVerMajor: number;
        osVerMinor: number;
        imageVerMajor: number;
        imageVerMinor: number;
        subSystemVerMajor: number;
        subSystemVerMinor: number;
        win32VersionValue: number;
        sizeOfImage: number;
        sizeOfHeaders: number;
        _checksum: number;
        subSystem: number;
        dllCharacteristics: number;
        sizeOfStackReserve: bigint;
        sizeOfStackCommit: bigint;
        sizeOfHeapReserve: bigint;
        sizeOfHeapCommit: bigint;
        loaderFlags: number;
        numberOfRVAsAndSizes: number;

        exportDirectory: OffsetSize;
        importDirectory: OffsetSize;
        resourceDirectory: OffsetSize;
        exceptionDirectory: OffsetSize;
        securityDirectory: OffsetSize;
        baseRelocationTable: OffsetSize;
        debugDirectory: OffsetSize;
        architectureSpecificData: OffsetSize;
        RVAOfGlobalPTR: OffsetSize;
        TLSDirectory: OffsetSize;
        loadConfigurationDirectory: OffsetSize;
        boundImportDirectory: OffsetSize;
        importAddressTable: OffsetSize;
        delayLoadImportDescriptors: OffsetSize;
        netHeader: OffsetSize;
    };
}

export type OptionalHeader = OptionalHeaders[OptionalHeaderTypes];



export interface SectionHeader {
    name: string;
    physicalAddressOrVirtualSize: number;
    virtualAddress: number;
    sizeOfRawData: number;
    pointerToRawData: number;
    pointerToRelocations: number;
    pointerToLinenumbers: number;
    numberOfRelocations: number;
    numberOfLinenumbers: number;
    characteristics: number;
}




export type DirEntry = {
    isStr: boolean;
    type: number;
    isDir: false;
    offset: number;
} | {
    isStr: boolean;
    type: number;
    isDir: true;
    dir: DirResource;
}

export interface DirResource {
    characteristics: number;
    timeDateStamp: number;
    majorVersion: number;
    minorVersion: number;
    numberOfNamedEntries: number;
    numberOfIdEntries: number;
    entries: DirEntry[];
}



export class ExecutableReader extends BlobReader {

    public async readDOSHeader(): Promise<DosHeader> {

        await this.load(0x40);

        this.assertMagic(0x5A4D, 'Uint16');

        return {
            bytesOnLastPageOfFile: this.readNumber('Uint16'),
            pagesInFile: this.readNumber('Uint16'),
            relocations: this.readNumber('Uint16'),
            sizeOfHeaderParagraphs: this.readNumber('Uint16'),
            minExtraParagraphsNeeded: this.readNumber('Uint16'),
            maxExtraParagraphsNeeded: this.readNumber('Uint16'),
            initialRelSSValue: this.readNumber('Uint16'),
            initialSPValue: this.readNumber('Uint16'),
            checksum: this.readNumber('Uint16'),
            initialIPValue: this.readNumber('Uint16'),
            initialRelCSValue: this.readNumber('Uint16'),
            fileAddressOfRelocationTable: this.readNumber('Uint16'),
            overlayNumber: this.readNumber('Uint16'),
            reserved1: this.readBuffer(8),
            OEMIdentifier: this.readNumber('Uint16'),
            OEMInformation: this.readNumber('Uint16'),
            reserved2: this.readBuffer(20),
            fileAddressOfNewExeHeader: this.readNumber('Uint32')
        }

    }

    public async readFileHeader(): Promise<FileHeader> {

        await this.load(0x18);

        this.assertMagic(0x00004550, 'Uint32');

        return {
            machine: this.readNumber('Uint16'),
            sectionsCount: this.readNumber('Uint16'),
            timeDateStamp: this.readNumber('Uint32'),
            ptrToSymbolTable: this.readNumber('Uint32'),
            numSymbols: this.readNumber('Uint32'),
            sizeOfOptionalHeader: this.readNumber('Uint16'),
            characteristics: this.readNumber('Uint16')
        }

    }

    private readOffsetSize(): OffsetSize {
        return {
            offset: this.readNumber('Uint32'),
            size: this.readNumber('Uint32')
        }
    }

    public readNT32Header(): OptionalHeaders[OptionalHeaderTypes.NT32] {

        return {
            type: 'NT32',
            linkerVerMajor: this.readNumber('Uint8'),
            linkerVerMinor: this.readNumber('Uint8'),
            sizeOfCode: this.readNumber('Uint32'),
            sizeOfInitializedData: this.readNumber('Uint32'),
            sizeOfUninitializedData: this.readNumber('Uint32'),
            entryPoint: this.readNumber('Uint32'),
            baseOfCode: this.readNumber('Uint32'),
            baseOfData: this.readNumber('Uint32'),
            imageBase: this.readNumber('Uint32'),
            sectionAlignment: this.readNumber('Uint32'),
            fileAlignment: this.readNumber('Uint32'),
            osVerMajor: this.readNumber('Uint16'),
            osVerMinor: this.readNumber('Uint16'),
            imageVerMajor: this.readNumber('Uint16'),
            imageVerMinor: this.readNumber('Uint16'),
            subSystemVerMajor: this.readNumber('Uint16'),
            subSystemVerMinor: this.readNumber('Uint16'),
            win32VersionValue: this.readNumber('Uint32'),
            sizeOfImage: this.readNumber('Uint32'),
            sizeOfHeaders: this.readNumber('Uint32'),
            _checksum: this.readNumber('Uint32'),
            subSystem: this.readNumber('Uint16'),
            dllCharacteristics: this.readNumber('Uint16'),
            sizeOfStackReserve: this.readNumber('Uint32'),
            sizeOfStackCommit: this.readNumber('Uint32'),
            sizeOfHeapReserve: this.readNumber('Uint32'),
            sizeOfHeapCommit: this.readNumber('Uint32'),
            loaderFlags: this.readNumber('Uint32'),
            numberOfRVAsAndSizes: this.readNumber('Uint32'),

            exportDirectory: this.readOffsetSize(),
            importDirectory: this.readOffsetSize(),
            resourceDirectory: this.readOffsetSize(),
            exceptionDirectory: this.readOffsetSize(),
            securityDirectory: this.readOffsetSize(),
            baseRelocationTable: this.readOffsetSize(),
            debugDirectory: this.readOffsetSize(),
            architectureSpecificData: this.readOffsetSize(),
            RVAOfGlobalPTR: this.readOffsetSize(),
            TLSDirectory: this.readOffsetSize(),
            loadConfigurationDirectory: this.readOffsetSize(),
            boundImportDirectory: this.readOffsetSize(),
            importAddressTable: this.readOffsetSize(),
            delayLoadImportDescriptors: this.readOffsetSize(),
            netHeader: this.readOffsetSize()
        }

    }

    public readNT64Header(): OptionalHeaders[OptionalHeaderTypes.NT64] {
      
        return {
            type: 'NT64',
            linkerVerMajor: this.readNumber('Uint8'),
            linkerVerMinor: this.readNumber('Uint8'),
            sizeOfCode: this.readNumber('Uint32'),
            sizeOfInitializedData: this.readNumber('Uint32'),
            sizeOfUninitializedData: this.readNumber('Uint32'),
            entryPoint: this.readNumber('Uint32'),
            baseOfCode: this.readNumber('Uint32'),
            imageBase: this.readBigNumber('BigUint64'),
            sectionAlignment: this.readNumber('Uint32'),
            fileAlignment: this.readNumber('Uint32'),
            osVerMajor: this.readNumber('Uint16'),
            osVerMinor: this.readNumber('Uint16'),
            imageVerMajor: this.readNumber('Uint16'),
            imageVerMinor: this.readNumber('Uint16'),
            subSystemVerMajor: this.readNumber('Uint16'),
            subSystemVerMinor: this.readNumber('Uint16'),
            win32VersionValue: this.readNumber('Uint32'),
            sizeOfImage: this.readNumber('Uint32'),
            sizeOfHeaders: this.readNumber('Uint32'),
            _checksum: this.readNumber('Uint32'),
            subSystem: this.readNumber('Uint16'),
            dllCharacteristics: this.readNumber('Uint16'),
            sizeOfStackReserve: this.readBigNumber('BigUint64'),
            sizeOfStackCommit: this.readBigNumber('BigUint64'),
            sizeOfHeapReserve: this.readBigNumber('BigUint64'),
            sizeOfHeapCommit: this.readBigNumber('BigUint64'),
            loaderFlags: this.readNumber('Uint32'),
            numberOfRVAsAndSizes: this.readNumber('Uint32'),

            exportDirectory: this.readOffsetSize(),
            importDirectory: this.readOffsetSize(),
            resourceDirectory: this.readOffsetSize(),
            exceptionDirectory: this.readOffsetSize(),
            securityDirectory: this.readOffsetSize(),
            baseRelocationTable: this.readOffsetSize(),
            debugDirectory: this.readOffsetSize(),
            architectureSpecificData: this.readOffsetSize(),
            RVAOfGlobalPTR: this.readOffsetSize(),
            TLSDirectory: this.readOffsetSize(),
            loadConfigurationDirectory: this.readOffsetSize(),
            boundImportDirectory: this.readOffsetSize(),
            importAddressTable: this.readOffsetSize(),
            delayLoadImportDescriptors: this.readOffsetSize(),
            netHeader: this.readOffsetSize()
        }

    }

    public readOptionalHeader(): OptionalHeader {

        switch(this.readNumber('Uint16')) {

            case 0x010B: {
                return this.readNT32Header();
                break; }

            case 0x020B: {
                return this.readNT64Header();
                break; }

            default: {
                throw new Error('Unknown optional header type.');
                break; }

        }

    }

    public readSectionHeaders(count: number): SectionHeader[] {

        return this.readArray(() => {
            return {
                name: this.readString(8),
                physicalAddressOrVirtualSize: this.readNumber('Uint32'),
                virtualAddress: this.readNumber('Uint32'),
                sizeOfRawData: this.readNumber('Uint32'),
                pointerToRawData: this.readNumber('Uint32'),
                pointerToRelocations: this.readNumber('Uint32'),
                pointerToLinenumbers: this.readNumber('Uint32'),
                numberOfRelocations: this.readNumber('Uint16'),
                numberOfLinenumbers: this.readNumber('Uint16'),
                characteristics: this.readNumber('Uint32')
            }
        }, count);

    }





    public readResources(start: number = this.pointer, offset?: number): DirResource {

        if(offset !== undefined) {
            this.pointer = start + offset;
        }

        const characteristics = this.readNumber('Uint32');
        const timeDateStamp = this.readNumber('Uint32');
        const majorVersion = this.readNumber('Uint16');
        const minorVersion = this.readNumber('Uint16');
        const numberOfNamedEntries = this.readNumber('Uint16');
        const numberOfIdEntries = this.readNumber('Uint16');
        const entries = this.readArray(() => {
            return {
                type: this.readNumber('Uint32'),
                offset: this.readNumber('Uint32')
            }
        }, numberOfNamedEntries + numberOfIdEntries).map(entry => {

            let type = entry.type;
            const isStr = !!(type & 0x80000000);
            type &= 0x7FFFFFFF;

            let offset = entry.offset;
            const isDir = !!(offset & 0x80000000);
            offset &= 0x7FFFFFFF;

            if(!isDir) {
                return {
                    isStr, type,
                    isDir: false, offset
                } as const
            } else {
                return {
                    isStr, type,
                    isDir: true, dir: this.readResources(start, offset)
                } as const
            }

        });

        return {
            characteristics,
            timeDateStamp,
            majorVersion,
            minorVersion,
            numberOfNamedEntries,
            numberOfIdEntries,
            entries
        }

    }

}


