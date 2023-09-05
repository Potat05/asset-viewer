
import { EventDispatcher } from "$lib/EventDispatcher";
import { Utils } from "$lib/Utils";
import { EVENT_META, EVENT_MIDI, type Midi, type MidiEvent } from "./midi";



const NOTE_LIST = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];



export class MidiNote {
    value: number;

    constructor(value: number) {
        this.value = value;

        if(this.value < 0 || this.value > 127 || !Number.isInteger(this.value)) {
            throw new Error(`Invalid MIDI note. "${this.value}"`);
        }
    }



    static fromNote(str: string): MidiNote {
        const [ note, octaveStr ] = str.split(' ');
        if(!note || !octaveStr) {
            throw new Error(`Failed to convert note to midi note. "${str}"`);
        }
        const octave = parseInt(octaveStr);
        if(Number.isNaN(octave)) {
            throw new Error(`Failed to convert note to midi note. "${str}"`);
        }
        return new MidiNote(NOTE_LIST.indexOf(note) + ((octave + 1) * NOTE_LIST.length));
    }

    getNote(): string {
        return `${NOTE_LIST[this.value % NOTE_LIST.length]} ${Math.floor(this.value / NOTE_LIST.length) - 1}`;
    }



}



export class MidiPlayer extends EventDispatcher<{
    'note': (note: MidiNote, velocity: number, channel: number, track: number) => void;
}> {

    midi: Midi;

    constructor(midi: Midi) {
        super();
        this.midi = midi;
    }



    division: number = 4;
    tempo: number = 120;



    getTickMs(dt: number): number {
        const bpm = (60000000 / this.tempo);
        return dt * (60000 / (bpm * this.division));
    }



    async play(): Promise<void> {

        if(this.midi.divFormat != 'metrical') {
            throw new Error(`Cannot play time div format "${this.midi.divFormat}"`);
        }

        this.division = this.midi.ticksPerQuarterNote;



        type AccumulatedEvent = MidiEvent & { acc: number };
        type PlayingTrack = { finished: boolean, index: number, events: AccumulatedEvent[] };



        const tracks: PlayingTrack[] = this.midi.tracks.map(track => {
            // Accumulated ticks on each track
            let acc = 0;
            return {
                index: 0,
                finished: false,
                events: track.map(event => {
                    acc += event.dt;
                    return { ...event, acc };
                })
            }
        });



        let tick = 0;

        while(tracks.some(track => !track.finished)) {

            for(let i = 0; i < tracks.length; i++) {
                const track = tracks[i];

                if(track.finished) continue;



                const event = track.events[track.index];

                // Event is not yet to be played.
                if(event.acc > tick) continue;

                // Execute event.
                if(event.meta == false) {

                    if(event.type == EVENT_MIDI.VoiceNoteOn) {

                        this.dispatchEvent('note', new MidiNote(event.note), event.velocity, event.channel, i);

                    } else if(event.type == EVENT_MIDI.VoiceNoteOff) {

                        this.dispatchEvent('note', new MidiNote(event.note), event.velocity, event.channel, i);

                    }

                } else {

                    if(event.type == EVENT_META.SetTempo) {
                        this.tempo = event.tempo;
                    } else if(event.type == EVENT_META.EndOfTrack) {
                        track.finished = true;
                        continue;
                    }

                }



                // Increment to next event.
                track.index++;

                if(track.index >= track.events.length) {
                    throw new Error(`MIDI player got to end of events without an end of track event.`);
                }

            }



            // Num ticks for next event.
            const ticksNextEvent = tracks.reduce((lowest, track) => {
                if(track.finished) return lowest;
                const event = track.events[track.index];
                return event.dt < lowest ? event.dt : lowest;
            }, Infinity);

            // Multiple events may be on the same tick.
            if(ticksNextEvent == 0) {
                continue;
            }

            // Go to next tick that has events.
            tick += ticksNextEvent;

            await Utils.wait(this.getTickMs(ticksNextEvent));

        }



    }

}


