
import { EventDispatcher } from "$lib/EventDispatcher";
import { Utils } from "$lib/Utils";
import { EVENT_MIDI, type Midi, type MidiEvent } from "./midi";



const NOTE_LIST = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];



class MidiNote {
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
    "playnote": (note: MidiNote) => void;
}> {

    midi: Midi;

    constructor(midi: Midi) {
        super();
        this.midi = midi;
    }



    async play(): Promise<void> {

        const playTrack = async (track: MidiEvent[]) => {

            for(let i = 0; i < track.length; i++) {

                const event = track[i];

                if(event.meta == false) {

                    if(event.type == EVENT_MIDI.VoiceNoteOn && event.velocity > 0) {
                        this.dispatchEvent('playnote', new MidiNote(event.note));
                    }

                }



                await Utils.wait(event.dt * 1);

            }

        }



        for(const track of this.midi.tracks) {
            playTrack(track);
        }

    }

}


