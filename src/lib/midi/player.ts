
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

        // This way of doing is is kinda trash.
        // TODO - Refactor try a different solution.

        let trackTime: number[] = this.midi.tracks.map(() => 0);
        let trackIndex: number[] = this.midi.tracks.map(() => 0); // -1 means finished.

        while(trackIndex.some(index => index != -1)) {

            for(let i = 0; i < this.midi.tracks.length; i++) {

                // Track is finished.
                if(trackIndex[i] == -1) continue;

                // Next event is not ready to be played.
                if(trackTime[i] > Date.now()) continue;

                const track = this.midi.tracks[i];

                const event = track[trackIndex[i]];

                if(event.meta == false) {

                    if(event.type == EVENT_MIDI.VoiceNoteOn) {

                        this.dispatchEvent('note', new MidiNote(event.note), event.velocity, event.channel, i);

                    } else if(event.type == EVENT_MIDI.VoiceNoteOff) {

                        this.dispatchEvent('note', new MidiNote(event.note), event.velocity, event.channel, i);

                    }

                } else {

                    if(event.type == EVENT_META.SetTempo) {
                        this.tempo = event.tempo;
                    }

                }



                trackIndex[i]++;

                

                if(trackIndex[i] >= track.length) {
                    trackIndex[i] = -1;
                    continue;
                }



                const nextEvent = track[trackIndex[i]];
                const ms = this.getTickMs(nextEvent.dt);
                trackTime[i] = Date.now() + ms;

            }



            await Utils.wait(Date.now() - trackTime.reduce((min, time) => time < min ? time : min, Infinity));

        }

    }

}


