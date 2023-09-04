
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
    'note': (note: MidiNote, channel: number, velocity: number) => void;
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

        const playTrack = async (track: MidiEvent[]) => {

            for(let i = 0; i < track.length; i++) {

                const event = track[i];

                if(event.meta == false) {

                    if(event.type == EVENT_MIDI.VoiceNoteOn) {

                        this.dispatchEvent('note', new MidiNote(event.note), event.channel, event.velocity);

                    }

                } else {

                    if(event.type == EVENT_META.SetTempo) {
                        this.tempo = event.tempo;
                    }

                }



                // The event DT is the time from last event to current.
                // So we need to look ahead to find how long to wait.
                const nextEvent = track[i + 1];
                if(!nextEvent) continue;

                const ms = this.getTickMs(nextEvent.dt);
                if(ms >= 10) {
                    await Utils.wait(ms);
                }

            }

        }



        for(const track of this.midi.tracks) {
            playTrack(track);
        }

    }

}


