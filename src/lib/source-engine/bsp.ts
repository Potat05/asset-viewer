
import { BlobReader } from "$lib/BlobReader";
import type { fsDirectory } from "$lib/FileSystem";
import { decodeLZMAProperties, decompress } from "$lib/codecs/lzma";
import { readZip } from "$lib/zip";





function decompressLZMA(compressedData: ArrayBuffer, uncompressedSize: number): ArrayBuffer {
    const compressedView = new DataView(compressedData);

    // Parse Valve's lzma_header_t.
    const actualSize = compressedView.getUint32(0x04, true);
    if(actualSize != uncompressedSize) {
        throw new Error('BSP decompressing lzma size does not match.');
    }
    const lzmaSize = compressedView.getUint32(0x08, true);
    if(lzmaSize + 0x11 <= compressedData.byteLength) {
        throw new Error('BSP decompressing lzma size does not match.');
    }

    const lzmaProperties = decodeLZMAProperties(compressedData.slice(0x0C));
    const uncompressed = decompress(compressedData.slice(0x11), lzmaProperties, actualSize);

    if(actualSize == uncompressed.byteLength) {
        throw new Error('BSP decompressing lzma size does not match.');
    }

    return uncompressed;
}





type LumpDirEntry = {
    offset: number;
    length: number;
    version: number;
    uncompressedLength: number;
}



export class BSP extends BlobReader {

    constructor(blob: Blob) {
        super(blob);
    }



    /** The BSP file format version. */
    public version: number = -1;

    private lumpDirEntries: LumpDirEntry[] = [];

    /** The map revision. */
    public revision: number = -1;

    private readLumpDirEntry(): LumpDirEntry {
        return {
            offset: this.readNumber('Int32'),
            length: this.readNumber('Int32'),
            version: this.readNumber('Int32'),
            uncompressedLength: this.readNumber('Int32'),
        }
    }

    public async readHeader(): Promise<void> {

        await this.load(8 + 32 * 64 + 4);

        this.assertMagic('VBSP');

        this.version = this.readNumber('Uint32');

        this.lumpDirEntries = this.readArray(this.readLumpDirEntry, 64);

        this.revision = this.readNumber('Uint32');

    }

    public async getRawLumpBuffer(index: number): Promise<ArrayBuffer | null> {

        const entry = this.lumpDirEntries[index];
        if(!entry) return null;

        if(entry.length == 0 || entry.offset == 0) return null;

        const buffer = await this.blob.slice(entry.offset, entry.offset + entry.length).arrayBuffer();

        if(entry.uncompressedLength == 0) {
            return buffer;
        }

        return decompressLZMA(buffer, entry.uncompressedLength);

    }

    public async getRawLumpBlob(index: number): Promise<Blob | null> {

        const entry = this.lumpDirEntries[index];
        if(!entry) return null;

        if(entry.length == 0 || entry.offset == 0) return null;

        const blob = this.blob.slice(entry.offset, entry.offset + entry.length);

        if(entry.uncompressedLength == 0) {
            return blob;
        }

        return new Blob([ decompressLZMA(await blob.arrayBuffer(), entry.uncompressedLength) ]);

    }

    public async getPakFile(name: string, parent: fsDirectory | null): Promise<fsDirectory | null> {

        const archiveBlob = await this.getRawLumpBlob(40); // PAKFILE = 40

        if(archiveBlob == null) return null;

        const zip = await readZip(archiveBlob, name, parent);

        return zip;

    }

}


