import { DataReader } from "./DataReader";



export namespace Utils {

    export function wait(ms: number): Promise<void> {
        return new Promise(r => setTimeout(r, ms));
    }
    


    const spaceChars = ' \n\t\\=+-/*:[](){}'.split('').map(char => char.charCodeAt(0));
    const isBinaryMaxWordLength = 8;

    /**
     * Either data is text or not.  
    */
    export function isBinary(data: ArrayBuffer): boolean {

        // This way of detecting if the data is binary is probably not good.
        // Probably want to detect if theres any null character or characters than cannot be in text file instead.

        if(data.byteLength == 0) {
            throw new Error('isBinary was called with no data.');
        }

        const reader = new DataReader(data);

        let wordLengths: number[] = [];
        let wordLength: number = 0;

        while(!reader.eof) {

            const char = reader.readNumber('Uint8');

            if(spaceChars.includes(char)) {
                if(wordLength > 0) {
                    wordLengths.push(wordLength);
                }
                wordLength = 0;
            } else {
                wordLength++;
            }

        }

        const averageWordLength = wordLengths.reduce((avg, len) => avg += len / wordLengths.length, 0);

        return averageWordLength > isBinaryMaxWordLength

    }



    export type DataBuffer = 
        ArrayBuffer |
        Uint8Array |
        Uint8ClampedArray |
        Int8Array |
        Uint16Array |
        Int16Array |
        Uint32Array |
        Int32Array |
        BigUint64Array |
        BigInt64Array |
        Float32Array |
        Float64Array;

    export function getBuffer(array: Utils.DataBuffer): ArrayBuffer {
        return (array instanceof ArrayBuffer ? array : array.buffer);
    }



    export function initArray<T>(length: number, map: (index: number) => T): T[] {
        let arr = new Array(length);
        for(let i = 0; i < length; i++) {
            arr[i] = map(i);
        }
        return arr;
    }




    let globalIDValue = 0;

    export function getID(): number {
        return globalIDValue++;
    }

}


