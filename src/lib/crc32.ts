import { NumberUtils } from "./NumberUtils";
import { Utils } from "./Utils";



const CRC32_TABLES: {[key: number]: Uint32Array} = {};



interface CRC32Options {
    polynomial: number;
    initial: number;
    reflIn: boolean;
    reflOut: boolean;
    xorOut: number;
}



export class CRC32 {

    public static reverse32(number: number): number {
        let reversed: number = 0;
        for(let i = 0; i < 32; i++) {
            if(number & (1 << i)) {
                reversed |= 1 << (31 - i);
            }
        }
        return reversed;
    }

    public static getTable(polynomial: number): Uint32Array {
        polynomial >>>= 0;

        if(CRC32_TABLES[polynomial]) return CRC32_TABLES[polynomial];

        const CRC_TABLE = new Uint32Array(256);

        for(let i = 0; i < 256; i++) {
            let r = i;
            for(let j = 0; j < 8; j++) {
                r = (r & 1 ? (r >>> 1) ^ polynomial : r >>> 1);
            }
            CRC_TABLE[i] = r;
        }

        CRC32_TABLES[polynomial] = CRC_TABLE;

        return CRC_TABLE
    }



    public readonly polynomial: number;
    public readonly table: Uint32Array;
    public readonly initial: number;
    public readonly reflIn: boolean;
    public readonly reflOut: boolean;
    public readonly xorOut: number;

    private value: number = -1;

    public setDigest(value: number = 0x00000000): void {
        if(this.reflIn) {
            this.value = value ^ 0xFFFFFFFF;
        } else {
            this.value = value;
        }
    }

    public getDigest(): number {
        if(this.reflOut) {
            return (this.value ^ this.xorOut) >>> 0;
        } else {
            return this.value >>> 0;
        }
    }

    constructor(options: Partial<CRC32Options> = {}) {
        this.polynomial = (options.polynomial ?? 0xEDB88320) >>> 0;
        this.table = CRC32.getTable(this.polynomial);
        this.initial = options.initial ?? 0x00000000;
        this.reflIn = options.reflIn ?? true;
        this.reflOut = options.reflOut ?? true;
        this.xorOut = options.xorOut ?? 0xFFFFFFFF;
        this.setDigest(this.initial);
    }



    public updateByte(byte: number): void {
        this.value = this.table[(this.value ^ byte) & 0xFF] ^ (this.value >>> 8);
    }

    public updateBytes(bytes: Uint8Array): void {
        for(let i = 0; i < bytes.length; i++) {
            this.value = this.table[(this.value ^ bytes[i]) & 0xFF] ^ (this.value >>> 8);
        }
    }



    public static calculateDigest(data: Utils.DataBuffer, options: Partial<CRC32Options> = {}): number {
        const crc = new CRC32(options);
        crc.updateBytes(new Uint8Array(Utils.getBuffer(data)));
        return crc.getDigest();
    }

    public static verifyDigest(digest: number, data: Utils.DataBuffer, options: Partial<CRC32Options> = {}): boolean {
        return CRC32.calculateDigest(data, options) == digest;
    }

    public static assertDigest(digest: number, data: Utils.DataBuffer, options: Partial<CRC32Options> = {}): void {
        const got = CRC32.calculateDigest(data, options);
        if(got != digest) {
            throw new Error(`CRC32 check failed, expected: ${NumberUtils.hex(digest, 4)}, got: ${NumberUtils.hex(got, 4)}`);
        }
    }

}


