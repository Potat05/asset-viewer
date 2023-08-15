
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

}


