
import { DataReader } from "$lib/DataReader";
import pako from "pako";



export enum TAGS {
    End = 0,
    Byte = 1,
    Short = 2,
    Int = 3,
    Long = 4,
    Float = 5,
    Double = 6,
    Byte_Array = 7,
    String = 8,
    List = 9,
    Compound = 10,
    Int_Array = 11,
    Long_Array = 12
}



export interface Tag {
    End: { tag: TAGS.End };
    Byte: { tag: TAGS.Byte; value: number; };
    Short: { tag: TAGS.Short; value: number; };
    Int: { tag: TAGS.Int; value: number; };
    Long: { tag: TAGS.Long; value: bigint; };
    Float: { tag: TAGS.Float; value: number; };
    Double: { tag: TAGS.Double; value: number; };
    Byte_Array: { tag: TAGS.Byte_Array; value: Int8Array; };
    String: { tag: TAGS.String; value: string; };
    List: { tag: TAGS.List; listTag: TAGS; value: (Tag[keyof Tag])[]; }
    Compound: { tag: TAGS.Compound; value: {[key: string]: Tag[keyof Tag]}; };
    Int_Array: { tag: TAGS.Int_Array; value: Int32Array; };
    Long_Array: { tag: TAGS.Long_Array; value: BigInt64Array; };
}



export function convertNBT(data: ArrayBuffer): Tag[keyof Tag] {

    const reader = new DataReader(data);

    reader.endianness = DataReader.BIG_ENDIAN;

    // Data is usually compressed with GZIP
    if(reader.readNumber('Uint16') == 0x1F8B) {
        reader.loadData(pako.ungzip(reader.buffer));
    }

    reader.pointer = 0;



    const readTag = (type: number): Tag[keyof Tag] => {

        switch(type) {

            default:
            case TAGS.End:
                throw new Error('Malformed NBT data.');

            case TAGS.Byte: return { tag: type, value: reader.readNumber('Int8') };
            case TAGS.Short: return { tag: type, value: reader.readNumber('Int16') };
            case TAGS.Int: return { tag: type, value: reader.readNumber('Int32') };
            case TAGS.Long: return { tag: type, value: reader.readBigNumber('BigInt64') };
            case TAGS.Float: return { tag: type, value: reader.readNumber('Float32') };
            case TAGS.Double: return { tag: type, value: reader.readNumber('Float64') };

            case TAGS.Byte_Array: return { tag: type, value: new Int8Array(reader.readBuffer(reader.readNumber('Int32'))) };
            case TAGS.String: return { tag: type, value: reader.readString(reader.readNumber('Uint16'), 'utf-8') };

            case TAGS.List: {

                const listType = reader.readNumber('Int8');

                const length = reader.readNumber('Int32');

                const list = new Array(length);

                for(let i = 0; i < length; i++) {
                    list[i] = readTag(listType);
                }

                return { tag: type, listTag: listType, value: list };

                break; }

            case TAGS.Compound: {

                let obj: {[key: string]: Tag[keyof Tag]} = {};

                while(true) {
                    const type = reader.readNumber('Uint8');
                    if(type == TAGS.End) break;
                    const name = reader.readString(reader.readNumber('Uint16'), 'utf-8');
                    obj[name] = readTag(type);
                }

                return { tag: type, value: obj };

                break; }

            case TAGS.Int_Array: return { tag: type, value: new Int32Array(reader.readBuffer(reader.readNumber('Int32') * 4)) };
            case TAGS.Long_Array: return { tag: type, value: new BigInt64Array(reader.readBuffer(reader.readNumber('Int32') * 8)) };

        }

    }



    if(reader.readNumber('Uint8') != TAGS.Compound) {
        throw new Error(`NBT data doesn't start with compound tag.`);
    }
    if(reader.readNumber('Uint16') != 0) {
        throw new Error(`First NBT tag must have no name.`);
    }

    return readTag(TAGS.Compound);

}


