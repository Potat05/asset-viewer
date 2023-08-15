
/*

    A huge help while making this:
        https://github.com/hasherezade/pe-bear/
    It has an insanely good and easy to use UI that made it
    easy to understand how executables are structured.

*/



import { DataReader } from "$lib/DataReader";
import { fsEntry } from "$lib/FileSystem";
import { ImageUtils } from "$lib/ImageUtils";
import { TypeUtils } from "$lib/TypeUtils";
import type { Viewer } from "$lib/Viewer";
import { ExecutableReader, type DirResource, type DirEntry } from "$lib/executable/reader";
import { ExeUtils } from "$lib/executable/utils";



async function loadIcon(data: ArrayBuffer): Promise<string | undefined> {

    const reader = new DataReader(data);

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



async function extractIcon(file: Blob): Promise<string | undefined> {

    const reader = new ExecutableReader(file);

    const [ dosHeader, fileHeader, optionalHeader, sectionHeaders ] = await ExeUtils.getHeaders(reader);

    const mapper = new ExeUtils.VirtualMemeorySpace(sectionHeaders);



    // const resourceSectionHeader = ExeUtils.getSectionHeader(sectionHeaders, '.rsrc');
    // if(!resourceSectionHeader) return;

    // await reader.load(resourceSectionHeader.sizeOfRawData, resourceSectionHeader.pointerToRawData);
    // const resources = reader.readResources();

    if(optionalHeader.resourceDirectory.offset == 0 || optionalHeader.resourceDirectory.size == 0) {
        return;
    }

    await reader.load(optionalHeader.resourceDirectory.size, mapper.toRaw(optionalHeader.resourceDirectory.offset));
    const resources = reader.readResources();



    function readOffsetSize(entry: DirEntry) {
        if(!entry || !entry.isDir) {
            throw new Error('readOffsetSize entry is not dir.')
        }
        
        const entryData = entry.dir.entries[0];
        if(!entryData || entryData.isDir) {
            throw new Error('readOffsetSize data entry is invalid.');
        }

        reader.pointer = entryData.offset;

        return {
            id: entry.type,
            offset: reader.readNumber('Uint32'),
            size: reader.readNumber('Uint32'),
            codePage: reader.readNumber('Uint32'),
            reserved: reader.readNumber('Uint32')
        }
    }



    const iconResource = resources.entries.find(resource => resource.type == 0x00000003);
    if(!iconResource || !iconResource.isDir) return;

    const icons = iconResource.dir.entries.map(readOffsetSize);



    const groupResource = resources.entries.find(resource => resource.type == 0x0000000E);
    if(!groupResource || !groupResource.isDir) return;

    const groups = await Promise.all(
        groupResource.dir.entries.map(readOffsetSize)
            .map(async offsetSize => {

                await reader.load(offsetSize.size, mapper.toRaw(offsetSize.offset));

                const reserved = reader.readBuffer(2);
                const type = reader.readNumber('Uint16');
                const count = reader.readNumber('Uint16');

                function transformSize(size: number): number {
                    return size == 0x00 ? 0xFF : size;
                }

                let entries = [];

                for(let i = 0; i < count; i++) {

                    entries.push({
                        width: transformSize(reader.readNumber('Uint8')),
                        height: transformSize(reader.readNumber('Uint8')),
                        colorCount: reader.readNumber('Uint8'),
                        reserved: reader.readBuffer(1),
                        planes: reader.readNumber('Uint16'),
                        bitCount: reader.readNumber('Uint16'),
                        bytesInRes: reader.readNumber('Uint32'),
                        id: reader.readNumber('Uint16')
                    });

                }

                return { reserved, type, count, entries };

            })
    );



    const bestIcon = groups[0].entries.reduce((best, icon) => {
        if(best === undefined) return icon;
        if(icon.width > best.width && icon.height > best.height) {
            return icon;
        } else {
            return best;
        }
    });



    // TODO: Select from the 0th icon group.
    const icon = icons.find(icon => icon.id == bestIcon.id);
    if(!icon) {
        throw new Error('Catastrophic error, Icon ID was not found.');
    }

    // Reading the actual image data.
    await reader.load(icon.size, mapper.toRaw(icon.offset));

    return await loadIcon(reader.readBuffer(reader.dataLeft));
    
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

            if(!iconData) return '/bootstrap-icons/filetype-exe.svg';

            return iconData;

        }

        return null;

    }
};

export default viewer;
