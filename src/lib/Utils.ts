import { DataReader } from "./DataReader";



export namespace Utils {

    export function wait(ms: number): Promise<void> {
        return new Promise(r => setTimeout(r, ms));
    }



    const spaceChars = ' \n\t\\=+-/*:[](){}'.split('').map(char => char.charCodeAt(0));
    const isBinaryMaxWordLength = 12;

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

}


