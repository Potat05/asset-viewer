import { DataReader } from "$lib/DataReader";
import { fsEntry } from "$lib/FileSystem";
import { ImageUtils } from "$lib/ImageUtils";
import { NumberUtils } from "$lib/NumberUtils";
import type { Viewer } from "$lib/Viewer";



interface DirResource {
    characteristics: number;
    timeDateStamp: number;
    majorVersion: number;
    minorVersion: number;
    numberOfNamedEntries: number;
    numberOfIdEntries: number;
    entries: (
        {
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
    )[];
}



class ExecutableReader extends DataReader {

    skip(bytes: number) {
        this.pointer += bytes;
    }

    readDOSHeader() {

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
            reserved1: this.skip(8),
            OEMIdentifier: this.readNumber('Uint16'),
            OEMInformation: this.readNumber('Uint16'),
            reserved2: this.skip(20),
            fileAddressOfNewExeHeader: this.readNumber('Uint32')
        }

    }

    readFileHeader() {

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

    readOffsetSize() {
        return {
            offset: this.readNumber('Uint32'),
            size: this.readNumber('Uint32')
        }
    }

    readNT32Header() {

        return {
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

    readNT64Header() {
      
        return {
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

    readOptionalHeader() {

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

    readSectionHeaders(count: number) {

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

    readResources(start: number = this.pointer, offset?: number): DirResource {

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



async function extractIcon(file: Blob): Promise<string | undefined> {

    const reader = new ExecutableReader(await file.arrayBuffer());

    const dosHeader = reader.readDOSHeader();

    reader.pointer = dosHeader.fileAddressOfNewExeHeader;
    const fileHeader = reader.readFileHeader();

    const optionalHeaderStart = reader.pointer;
    const optionalHeader = reader.readOptionalHeader();

    reader.pointer = optionalHeaderStart + fileHeader.sizeOfOptionalHeader;
    const sectionHeaders = reader.readSectionHeaders(fileHeader.sectionsCount);



    const resourceSectionHeader = sectionHeaders.find(section => section.name == '.rsrc\x00\x00\x00');
    if(!resourceSectionHeader) return;

    reader.pointer = resourceSectionHeader.pointerToRawData;
    const resourcesStart = reader.pointer;
    const resources = reader.readResources(resourcesStart);



    const iconResource = resources.entries.find(resource => resource.type == 0x00000003);
    if(!iconResource || !iconResource.isDir) return;

    const biggestIcon = iconResource.dir.entries[0];
    if(!biggestIcon || !biggestIcon.isDir) return;

    const biggestIconData = biggestIcon.dir.entries[0];
    if(!biggestIconData || biggestIconData.isDir) return;

    reader.pointer = resourcesStart + biggestIconData.offset;

    const virtualOffsetToData = reader.readNumber('Uint32');
    const dataSize = reader.readNumber('Uint32');
    const codePage = reader.readNumber('Uint32');
    const reserved = reader.readNumber('Uint32');

    const offsetToData = virtualOffsetToData - resourceSectionHeader.virtualAddress + resourceSectionHeader.pointerToRawData;

    // Reading the actual image data.
    reader.pointer = offsetToData;
    reader.loadData(reader.readBuffer(dataSize));
    
    // Image data may be either .ico or png
    if(reader.magic([
        0x89,
        0x50, 0x4E, 0x47,
        0x0D, 0x0A,
        0x1A,
        0x0A
    ])) {

        // PNG icon
        return URL.createObjectURL(new Blob([ reader.buffer ]));

    } else {

        // BMP icon
        // https://en.wikipedia.org/wiki/ICO_(file_format)#:~:text=ICO/CUR%20file-,Referenced%20image%20data,-%5Bedit%5D
        

        // Construct full BMP data
        reader.pointer = 0;
        const DIBSize = reader.readNumber('Uint32');

        const view = new DataView(new ArrayBuffer(reader.length + 14));

        view.setUint8(0, 0x42);
        view.setUint8(1, 0x4D);

        view.setUint32(2, view.byteLength, true);
        view.setUint32(10, 14 + DIBSize, true);

        new Uint8Array(view.buffer).set(new Uint8Array(reader.buffer), 14);


        // Decode BMP data
        const imgData = await ImageUtils.imgBuffer2imgData(view.buffer);

        // Mask imagedata

        // TODO
        // For now we just only use the bottom half of the img. (Because I'm lazy.)

        const newImgData = new ImageData(imgData.width, imgData.height >> 1);
        newImgData.data.set(imgData.data.slice(imgData.width * (imgData.height >> 1) * 4));

        return ImageUtils.imgData2url(newImgData);

    }

}



const viewer: Viewer = {
    namespace: 'executable',
    priority: 1,
    isValid: async entry => {
        return entry.type == fsEntry.File && entry.name.endsWith('.exe');
    },
    getIcon: async entry => {

        if(entry.type == fsEntry.File) {

            const iconData = await extractIcon(await entry.blob());

            if(!iconData) return null;

            return iconData;

        }

        return null;
    }
};

export default viewer;
