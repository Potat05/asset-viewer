
import { DataReader } from "$lib/DataReader";
import { NumberUtils } from "$lib/NumberUtils";



enum MIDI_EVENT {
    VoiceNoteOff = 0x8,
    VoiceNoteOn = 0x9,
    VoiceAftertouch = 0xA,
    VoiceControlChange = 0xB,
    VoiceProgramChange = 0xC,
    VoiceChannelPressure = 0xD,
    VoicePitchBlend = 0xE,
    SystemExclusive = 0xF
}

enum MIDI_META_EVENT {
    SequenceNumber = 0x00,
    TextEvent = 0x01,
    CopyrightNotice = 0x02,
    SequenceTrackName = 0x03,
    InstrumentName = 0x04,
    Lyric = 0x05,
    Marker = 0x06,
    CuePoint = 0x07,
    MIDIChannelPrefix = 0x20,
    EndOfTrack = 0x2F,
    SetTempo = 0x51,
    SMPTEOffset = 0x54,
    TimeSignature = 0x58,
    KeySignature = 0x59,
    SequencerSpecificMetaEvent = 0x7F
}



interface MidiEvents {
    [MIDI_EVENT.VoiceNoteOff]: {
        note: number;
        velocity: number;
    };
    [MIDI_EVENT.VoiceNoteOn]: {
        note: number;
        velocity: number;
    };
    [MIDI_EVENT.VoiceAftertouch]: {
        note: number;
        pressure: number;
    };
    [MIDI_EVENT.VoiceControlChange]: {
        controller: number;
        value: number;
    };
    [MIDI_EVENT.VoiceProgramChange]: {
        program: number;
    };
    [MIDI_EVENT.VoiceChannelPressure]: {
        pressure: number;
    };
    [MIDI_EVENT.VoicePitchBlend]: {
        pitch: number;
    };
    [MIDI_EVENT.SystemExclusive]: {
        data: ArrayBuffer;
    };
}

type MidiEvent = {
    [Type in MIDI_EVENT]: {
        type: Type;
    } & MidiEvents[Type]
} & {
    meta: false;
    dt: number;
    channel: number;
}





/**
 * @see http://www.music.mcgill.ca/~ich/classes/mumt306/StandardMIDIfileformat.html
 */
class MidiReader extends DataReader {

    /**
     * Read variable length number.
     */
    readVLQ(): number {
        let num = 0;
        for(let i=0; i < 4; i++) {
            const byte = this.readNumber('Uint8');
            num = (num << 7) | byte & 0b01111111;
            if(!(byte & 0b10000000)) break;
        }
        return num;
    }

    readHeader() {
        this.assertMagic('MThd');
        this.assertMagic(6, 'Uint32'); // Header length must always be 6 bytes.

        return {
            format: this.readNumber('Uint16'),
            numTracks: this.readNumber('Uint16'),
            timeDivision: this.readNumber('Uint16')
        }
    }

    readEvent(dt: number, status: number): MidiEvent {
        const type = ((status & 0xF0) >> 4) as MIDI_EVENT;
        const channel = status & 0x0F;

        let data;

        switch(type) {
            case MIDI_EVENT.VoiceNoteOff: data = {
                note: this.readVLQ(),
                velocity: this.readVLQ()
            }; break;
            case MIDI_EVENT.VoiceNoteOn: data = {
                note: this.readVLQ(),
                velocity: this.readVLQ()
            }; break;
            case MIDI_EVENT.VoiceAftertouch: data = {
                note: this.readVLQ(),
                pressure: this.readVLQ()
            }; break;
            case MIDI_EVENT.VoiceControlChange: data = {
                controller: this.readVLQ(),
                value: this.readVLQ()
            }; break;
            case MIDI_EVENT.VoiceProgramChange: data = {
                program: this.readVLQ()
            }; break;
            case MIDI_EVENT.VoiceChannelPressure: data = {
                pressure: this.readVLQ()
            }; break;
            case MIDI_EVENT.VoicePitchBlend: data = {
                pitch: (this.readVLQ() << 7) & this.readVLQ()
            }; break;
            case MIDI_EVENT.SystemExclusive: data = {
                data: this.readBuffer(this.readVLQ())
            }; break;
            default: throw new Error('Failed reading midi event.');
        }

        return ({ meta: false, dt, type, channel, ...data }) as unknown as MidiEvent;
    }

    readMetaEvent(dt: number) {
        const type = this.readNumber('Uint8');
        const length = this.readVLQ();

        const start = this.pointer;

        let data;

        switch(type) {
            case MIDI_META_EVENT.SequenceTrackName: data = {
                name: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.EndOfTrack: data = {
            }; break;
            case MIDI_META_EVENT.SetTempo: data = {
                tempo: this.readCustomNumber(3, false)
            }; break;
            case MIDI_META_EVENT.TimeSignature: data = {
                numerator: this.readNumber('Uint8'),
                denominator: Math.pow(2, this.readNumber('Uint8')),
                clocks: this.readNumber('Uint8'),
                notes: this.readNumber('Uint8')
            }; break;
            default: data = {
                data: this.readBuffer(length)
            }; break;
        }

        if(this.pointer < start + length) {
            console.warn(`Meta event ${MIDI_META_EVENT[type]} has invalid length.`);
            this.pointer = start + length;
        } else if(this.pointer > start + length) {
            throw new Error(`Meta event ${MIDI_META_EVENT[type]} length is too small for data.`);
        }

        return ({ meta: true, dt, type, ...data, typeName: MIDI_META_EVENT[type] });

    }

    readTrack() {
        this.assertMagic('MTrk');
        const length = this.readNumber('Uint32');

        const start = this.pointer;

        let events = [];

        let lastStatus: number = 0;

        while(this.pointer - start < length) {

            const dt = this.readVLQ();



            let status = this.readNumber('Uint8');
            if(status > 0x80) {
                lastStatus = status;
            } else {
                status = lastStatus;
                this.pointer--;
            }



            const event = status == 0xFF ?
                this.readMetaEvent(dt) :
                this.readEvent(dt, status);

            events.push(event);



            if(event.meta == true && event.type == MIDI_META_EVENT.EndOfTrack) {
                break;
            }

        }

        return events;

    }

}





export function parseMidi(buffer: ArrayBuffer) {

    const reader = new MidiReader(buffer);
    reader.endianness = DataReader.BIG_ENDIAN;

    const header = reader.readHeader();

    const tracks = reader.readArray(reader.readTrack, header.numTracks);

    console.log(header);
    console.log(tracks);

}


