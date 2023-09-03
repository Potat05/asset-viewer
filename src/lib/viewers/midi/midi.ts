import { fsEntry } from "$lib/FileSystem";
import { Utils } from "$lib/Utils";
import type { Viewer } from "$lib/Viewer";
import { parseMidi } from "$lib/midi/midi";
import { MidiPlayer } from "$lib/midi/player";

const viewer: Viewer = {
    namespace: 'midi.midi',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.File) return false;
        return entry.name.endsWith('.mid') || entry.name.endsWith('.midi');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            const parsed = parseMidi(await entry.buffer());

            const player = new MidiPlayer(parsed);



            const ctx = new AudioContext();



            function midiNoteToFreq(value: number): number {
                return 440 * (2 ** ((value - 69) / 12));
            }

            player.addEventListener('playnote', async note => {

                const gain = ctx.createGain();
                gain.connect(ctx.destination);
                gain.gain.value = 0.01;
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

                const osc = ctx.createOscillator();
                osc.connect(gain);
                osc.type = 'square';
                osc.frequency.value = midiNoteToFreq(note.value);
                osc.start();

                await Utils.wait(500);

                gain.disconnect();
                osc.stop();
                osc.disconnect();

            });



            player.play();

        } else {
            throw new Error('Tried to create midi viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-music.svg";
    }
};

export default viewer;
