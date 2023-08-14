
import { DataReader } from "./DataReader";
import { NumberUtils } from "./NumberUtils";



export class BlobReader extends DataReader {

    public blob: Blob;
    public blobPointer: number = 0;
    public get blobLength(): number {
        return this.blob.size;
    }
    public get blobEof(): boolean {
        return this.blobPointer < this.blobLength;
    }
    public get blobDataLeft(): number {
        return this.blobLength - this.blobPointer;
    }

    public async load(length: number, offset: number = this.blobPointer): Promise<void> {
        // console.debug(`BlobReader.load: Section: ${NumberUtils.hex(offset, 4)} - ${NumberUtils.hex(offset + length, 4)}`);
        this.loadData(await this.blob.slice(offset, offset + length).arrayBuffer());
        this.blobPointer = offset + length;
    }

    constructor(blob: Blob) {
        super();
        this.blob = blob;
    }

}


