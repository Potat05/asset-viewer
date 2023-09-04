
import { DataReader } from "$lib/DataReader";





export enum EVENT_MIDI {
    VoiceNoteOff = 0x8,
    VoiceNoteOn = 0x9,
    VoiceAftertouch = 0xA,
    VoiceControlChange = 0xB,
    VoiceProgramChange = 0xC,
    VoiceChannelPressure = 0xD,
    VoicePitchBlend = 0xE,
    SystemExclusive = 0xF
}

interface EventsMidi {
    [EVENT_MIDI.VoiceNoteOff]: {
        note: number;
        velocity: number;
    };
    [EVENT_MIDI.VoiceNoteOn]: {
        note: number;
        velocity: number;
    };
    [EVENT_MIDI.VoiceAftertouch]: {
        note: number;
        pressure: number;
    };
    [EVENT_MIDI.VoiceControlChange]: {
        controller: number;
        value: number;
    };
    [EVENT_MIDI.VoiceProgramChange]: {
        program: number;
    };
    [EVENT_MIDI.VoiceChannelPressure]: {
        pressure: number;
    };
    [EVENT_MIDI.VoicePitchBlend]: {
        pitch: number;
    };
    [EVENT_MIDI.SystemExclusive]: {
        data: ArrayBuffer;
    };
}

type _EventsMidiWithType = {
    [Type in EVENT_MIDI]: {
        type: Type;
    } & EventsMidi[Type];
}

type EventMidi = _EventsMidiWithType[keyof _EventsMidiWithType] & {
    meta: false;
    dt: number;
    channel: number;
}



export enum EVENT_META {
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

interface EventsMeta {
    [EVENT_META.SequenceNumber]: {
        sequence: number;
    };
    [EVENT_META.TextEvent]: {
        text: string;
    };
    [EVENT_META.CopyrightNotice]: {
        copyright: string;
    };
    [EVENT_META.SequenceTrackName]: {
        name: string;
    };
    [EVENT_META.InstrumentName]: {
        instrument: string;
    };
    [EVENT_META.Lyric]: {
        lyric: string;
    };
    [EVENT_META.Marker]: {
        marker: string;
    };
    [EVENT_META.CuePoint]: {
        description: string;
    };
    [EVENT_META.MIDIChannelPrefix]: {
        channel: number;
    };
    [EVENT_META.EndOfTrack]: {
    };
    [EVENT_META.SetTempo]: {
        tempo: number;
    };
    [EVENT_META.SMPTEOffset]: {
        hour: number;
        minute: number;
        second: number;
        frame: number;
        fractionalFrame: number;
    };
    [EVENT_META.TimeSignature]: {
        numerator: number;
        denominator: number;
        clocks: number;
        notes: number;
    };
    [EVENT_META.KeySignature]: {
        signature: number;
        key: 'major' | 'minor';
    };
    [EVENT_META.SequencerSpecificMetaEvent]: {
        data: ArrayBuffer;
    };
}

type _EventsMetaWithType = {
    [Type in EVENT_META]: {
        type: Type;
    } & EventsMeta[Type];
}

type EventMeta = _EventsMetaWithType[keyof _EventsMetaWithType] & {
    meta: true;
    dt: number;
}



export type MidiEvent = (EventMidi | EventMeta);



export enum MIDI_FORMAT {
    Single = 0,
    Simultaneous = 1,
    Independent = 2
}

type MidiHeader = {
    format: MIDI_FORMAT;
    numTracks: number;
} & ({
    divFormat: 'metrical';
    ticksPerQuarterNote: number;
} | {
    divFormat: 'timecode';
    negativeSMPTEFormat: number;
    ticksPerFrame: number;
});

export type Midi = MidiHeader & {
    tracks: MidiEvent[][];
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

        const numTracks = this.readNumber('Uint16');

        if(format == MIDI_FORMAT.Single && numTracks != 1) {
            throw new Error('MIDI header invalid format.');
        }

        const timeDivisionValue = this.readNumber('Uint16');

        if(timeDivisionValue & 0b1000000000000000) {

            const negativeSMPTEFormat = (timeDivisionValue & 0b0111111100000000) >> 8;
            const ticksPerFrame = timeDivisionValue & 0b0000000011111111;

            return {
                format,
                numTracks,
                divFormat: 'timecode',
                negativeSMPTEFormat,
                ticksPerFrame
            }

        } else {

            return {
                format,
                numTracks,
                divFormat: 'metrical',
                ticksPerQuarterNote: timeDivisionValue
            }

        }
    }

    readEvent(dt: number, status: number): EventMidi {
        const type = ((status & 0xF0) >> 4) as EVENT_MIDI;
        const channel = status & 0x0F;

        let data;

        switch(type) {
            case EVENT_MIDI.VoiceNoteOff: data = {
                note: this.readVLQ(),
                velocity: this.readVLQ()
            }; break;
            case EVENT_MIDI.VoiceNoteOn: data = {
                note: this.readVLQ(),
                velocity: this.readVLQ()
            }; break;
            case EVENT_MIDI.VoiceAftertouch: data = {
                note: this.readVLQ(),
                pressure: this.readVLQ()
            }; break;
            case EVENT_MIDI.VoiceControlChange: data = {
                controller: this.readVLQ(),
                value: this.readVLQ()
            }; break;
            case EVENT_MIDI.VoiceProgramChange: data = {
                program: this.readVLQ()
            }; break;
            case EVENT_MIDI.VoiceChannelPressure: data = {
                pressure: this.readVLQ()
            }; break;
            case EVENT_MIDI.VoicePitchBlend: data = {
                pitch: (this.readVLQ() << 7) & this.readVLQ()
            }; break;
            case EVENT_MIDI.SystemExclusive: data = {
                data: this.readBuffer(this.readVLQ())
            }; break;
            default: throw new Error('Failed reading midi event.');
        }

        return ({ meta: false, dt, type, channel, ...data }) as unknown as EventMidi;
    }

    readMetaEvent(dt: number): EventMeta {
        const type = this.readNumber('Uint8');
        const length = this.readVLQ();

        const start = this.pointer;

        let data;

        switch(type) {
            case EVENT_META.SequenceNumber: data = {
                sequence: this.readNumber('Uint16')
            }; break;
            case EVENT_META.TextEvent: data = {
                text: this.readString(length, 'utf-8')
            }; break;
            case EVENT_META.CopyrightNotice: data = {
                copyright: this.readString(length, 'utf-8')
            }; break;
            case EVENT_META.SequenceTrackName: data = {
                name: this.readString(length, 'utf-8')
            }; break;
            case EVENT_META.InstrumentName: data = {
                instrument: this.readString(length, 'utf-8')
            }; break;
            case EVENT_META.Lyric: data = {
                lyric: this.readString(length, 'utf-8')
            }; break;
            case EVENT_META.Marker: data = {
                marker: this.readString(length, 'utf-8')
            }; break;
            case EVENT_META.CuePoint: data = {
                description: this.readString(length, 'utf-8')
            }; break;
            case EVENT_META.MIDIChannelPrefix: data = {
                channel: this.readNumber('Uint8')
            }; break;
            case EVENT_META.EndOfTrack: data = {
            }; break;
            case EVENT_META.SetTempo: data = {
                tempo: this.readCustomNumber(3, false)
            }; break;
            case EVENT_META.SMPTEOffset: data = {
                hour: this.readNumber('Uint8'),
                minute: this.readNumber('Uint8'),
                second: this.readNumber('Uint8'),
                frame: this.readNumber('Uint8'),
                fractionalFrame: this.readNumber('Uint8')
            }; break;
            case EVENT_META.TimeSignature: data = {
                numerator: this.readNumber('Uint8'),
                denominator: Math.pow(2, this.readNumber('Uint8')),
                clocks: this.readNumber('Uint8'),
                notes: this.readNumber('Uint8')
            }; break;
            case EVENT_META.KeySignature: data = {
                signature: this.readNumber('Int8'),
                key: this.readNumber('Uint8') == 0 ? 'major' : 'minor'
            }; break;
            case EVENT_META.SequencerSpecificMetaEvent: {
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
            console.warn(`Meta event ${EVENT_META[type]} has invalid length.`);
            this.pointer = start + length;
        } else if(this.pointer > start + length) {
            throw new Error(`Meta event ${EVENT_META[type]} length is too small for data.`);
        }

        return ({ meta: true, dt, type, ...data }) as unknown as EventMeta;

    }

    readTrack(): MidiEvent[] {
        this.assertMagic('MTrk');
        const length = this.readNumber('Uint32');

        const start = this.pointer;

        let events: (EventMidi | EventMeta)[] = [];

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



            if(event.meta && event.type == EVENT_META.EndOfTrack) {
                break;
            }

        }

        return events;

    }

}





export function parseMidi(buffer: ArrayBuffer): Midi {

    const reader = new MidiReader(buffer);
    reader.endianness = DataReader.BIG_ENDIAN;

    const header = reader.readHeader();

    const tracks = reader.readArray(reader.readTrack, header.numTracks);

    return {
        ...header,
        tracks
    }

}


