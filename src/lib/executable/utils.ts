
import type { DosHeader, ExecutableReader, FileHeader, OptionalHeader, SectionHeader } from "./reader";



export namespace ExeUtils {

    export async function getHeaders(reader: ExecutableReader): Promise<[ DosHeader, FileHeader, OptionalHeader, SectionHeader[] ]> {

        const dosHeader = await reader.readDOSHeader();

        reader.blobPointer = dosHeader.fileAddressOfNewExeHeader;
        const fileHeader = await reader.readFileHeader();

        await reader.load(fileHeader.sizeOfOptionalHeader);
        const optionalHeader = reader.readOptionalHeader();
        
        await reader.load(optionalHeader.sizeOfHeaders);
        const sectionHeaders = reader.readSectionHeaders(fileHeader.sectionsCount);

        return [ dosHeader, fileHeader, optionalHeader, sectionHeaders ];

    }



    export function getSectionHeader(sections: SectionHeader[], type: string, index: number = 0): SectionHeader | null {

        for(const section of sections) {

            if(section.name == type || section.name.replaceAll('\0', '') == type) {
                if(index <= 0) {
                    return section;
                }
    
                index--;
            }

        }

        return null;

    }



    export class VirtualMemeorySpace {

        public sections: SectionHeader[];

        constructor(sections: SectionHeader[]) {
            this.sections = sections;
        }

        /**
         * Map an address in raw space to virtual space.  
         * @returns -1 if unable to map.  
         */
        toVirtual(address: number): number {

            for(const section of this.sections) {

                if(address >= section.pointerToRawData && address < section.pointerToRawData + section.sizeOfRawData) {

                    return (address - section.pointerToRawData) + section.virtualAddress;

                }

            }

            return -1;

        }

        /**
         * Map an address in virtual space to raw space.  
         * @param address -1 if unable to map.  
         */
        toRaw(address: number): number {

            for(const section of this.sections) {

                if(address >= section.virtualAddress && address < section.virtualAddress + section.physicalAddressOrVirtualSize) {

                    return (address - section.virtualAddress) + section.pointerToRawData;
                    
                }

            }

            return -1;

        }

    }

}


