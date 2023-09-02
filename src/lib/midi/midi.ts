
import { DataReader } from "$lib/DataReader";





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

type _MidiEventsWithType = {
    [Type in MIDI_EVENT]: {
        type: Type;
    } & MidiEvents[Type];
}

type MidiEvent = _MidiEventsWithType[keyof _MidiEventsWithType] & {
    meta: false;
    dt: number;
    channel: number;
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

interface MidiMetaEvents {
    [MIDI_META_EVENT.SequenceNumber]: {
        sequence: number;
    };
    [MIDI_META_EVENT.TextEvent]: {
        text: string;
    };
    [MIDI_META_EVENT.CopyrightNotice]: {
        copyright: string;
    };
    [MIDI_META_EVENT.SequenceTrackName]: {
        name: string;
    };
    [MIDI_META_EVENT.InstrumentName]: {
        instrument: string;
    };
    [MIDI_META_EVENT.Lyric]: {
        lyric: string;
    };
    [MIDI_META_EVENT.Marker]: {
        marker: string;
    };
    [MIDI_META_EVENT.CuePoint]: {
        description: string;
    };
    [MIDI_META_EVENT.MIDIChannelPrefix]: {
        channel: number;
    };
    [MIDI_META_EVENT.EndOfTrack]: {
    };
    [MIDI_META_EVENT.SetTempo]: {
        tempo: number;
    };
    [MIDI_META_EVENT.SMPTEOffset]: {
        hour: number;
        minute: number;
        second: number;
        frame: number;
        fractionalFrame: number;
    };
    [MIDI_META_EVENT.TimeSignature]: {
        numerator: number;
        denominator: number;
        clocks: number;
        notes: number;
    };
    [MIDI_META_EVENT.KeySignature]: {
        signature: number;
        key: 'major' | 'minor';
    };
    [MIDI_META_EVENT.SequencerSpecificMetaEvent]: {
        data: ArrayBuffer;
    };
}

type _MidiMetaEventsWithType = {
    [Type in MIDI_META_EVENT]: {
        type: Type;
    } & MidiMetaEvents[Type];
}

type MidiMetaEvent = _MidiMetaEventsWithType[keyof _MidiMetaEventsWithType] & {
    meta: true;
    dt: number;
}



enum MIDI_FORMAT {
    Single = 0,
    Simultaneous = 1,
    Independent = 2
}

type MidiHeader = {
    format: MIDI_FORMAT;
    numTracks: number;
    timeDivision: number;
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

    readHeader(): MidiHeader {
        this.assertMagic('MThd');
        this.assertMagic(6, 'Uint32'); // Header length must always be 6 bytes.

        const format = this.readNumber('Uint16');

        if(!(format in MIDI_FORMAT)) {
            throw new Error(`MIDI header invalid format.`);
        }

        return {
            format,
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

    readMetaEvent(dt: number): MidiMetaEvent {
        const type = this.readNumber('Uint8');
        const length = this.readVLQ();

        const start = this.pointer;

        let data;

        switch(type) {
            case MIDI_META_EVENT.SequenceNumber: data = {
                sequence: this.readNumber('Uint16')
            }; break;
            case MIDI_META_EVENT.TextEvent: data = {
                text: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.CopyrightNotice: data = {
                copyright: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.SequenceTrackName: data = {
                name: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.InstrumentName: data = {
                instrument: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.Lyric: data = {
                lyric: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.Marker: data = {
                marker: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.CuePoint: data = {
                description: this.readString(length, 'utf-8')
            }; break;
            case MIDI_META_EVENT.MIDIChannelPrefix: data = {
                channel: this.readNumber('Uint8')
            }; break;
            case MIDI_META_EVENT.EndOfTrack: data = {
            }; break;
            case MIDI_META_EVENT.SetTempo: data = {
                tempo: this.readCustomNumber(3, false)
            }; break;
            case MIDI_META_EVENT.SMPTEOffset: data = {
                hour: this.readNumber('Uint8'),
                minute: this.readNumber('Uint8'),
                second: this.readNumber('Uint8'),
                frame: this.readNumber('Uint8'),
                fractionalFrame: this.readNumber('Uint8')
            }; break;
            case MIDI_META_EVENT.TimeSignature: data = {
                numerator: this.readNumber('Uint8'),
                denominator: Math.pow(2, this.readNumber('Uint8')),
                clocks: this.readNumber('Uint8'),
                notes: this.readNumber('Uint8')
            }; break;
            case MIDI_META_EVENT.KeySignature: data = {
                signature: this.readNumber('Int8'),
                key: this.readNumber('Uint8') == 0 ? 'major' : 'minor'
            }; break;
            case MIDI_META_EVENT.SequencerSpecificMetaEvent: {
                console.log('MIDI Skipped sequencer specific meta event.');
                data = {
                    data: this.readBuffer(length)
                }
                break; }
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

        return ({ meta: true, dt, type, ...data }) as unknown as MidiMetaEvent;

    }

    readTrack(): (MidiEvent | MidiMetaEvent)[] {
        this.assertMagic('MTrk');
        const length = this.readNumber('Uint32');

        const start = this.pointer;

        let events: (MidiEvent | MidiMetaEvent)[] = [];

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



            if(event.meta && event.type == MIDI_META_EVENT.EndOfTrack) {
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

    return {
        ...header,
        tracks
    }

}


