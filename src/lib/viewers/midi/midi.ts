import { fsEntry } from "$lib/FileSystem";
import { Utils } from "$lib/Utils";
import type { Viewer } from "$lib/Viewer";
import { EVENT_META, EVENT_MIDI, MIDI_FORMAT, parseMidi } from "$lib/midi/midi";
import { MidiNote, MidiPlayer } from "$lib/midi/player";
import Code from "../../../components/Code.svelte";

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


            
            let text = '';
            text += `FORMAT: ${MIDI_FORMAT[parsed.format]}\n`;
            text += `DIVISION: ${parsed.divFormat}\n`;
            if(parsed.divFormat == 'metrical') {
                text += `  TICKS PER QUARTER NOTE: ${parsed.ticksPerQuarterNote}\n`;
            } else if(parsed.divFormat == 'timecode') {
                text += `  NEGATIVE SMPTE FORMAT: ${parsed.negativeSMPTEFormat}\n`;
                text += `  TICKS PER FRAME: ${parsed.ticksPerFrame}\n`;
            }
            text += `NUM TRACKS: ${parsed.numTracks}\n`;
            for(let i = 0; i < parsed.tracks.length; i++) {
                const track = parsed.tracks[i];
                text += `TRACK ${i}:\n`;
                for(const event of track) {
                    if(event.meta) {
                        text += `  META EVENT: ${EVENT_META[event.type]}\n`;
                    } else {
                        text += `  EVENT: ${EVENT_MIDI[event.type]}\n`;
                    }
                    for(const [ key, value ] of Object.entries(event)) {
                        if(key == 'type' || key == 'meta') continue;
                        text += `    ${key.toUpperCase()}: ${value}\n`;
                    }
                }
            }

            new Code({
                target,
                props: { code: text, langName: 'plaintext' }
            });



            const player = new MidiPlayer(parsed);



            const ctx = new AudioContext();



            function midiNoteToFreq(value: number): number {
                return 440 * (2 ** ((value - 69) / 12));
            }

            let sounds: { gain: GainNode, osc: OscillatorNode, note: MidiNote, channel: number, track: number }[] = [];

            player.addEventListener('note', async (note, velocity, channel, track) => {

                if(velocity > 0) {

                    const gain = ctx.createGain();
                    gain.connect(ctx.destination);
                    // Prevent audio popping.
                    gain.gain.value = 0.0001;
                    gain.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 0.01);
                    
                    const osc = ctx.createOscillator();
                    osc.connect(gain);
                    osc.type = 'triangle';
                    osc.frequency.value = midiNoteToFreq(note.value);
                    osc.start();

                    sounds.push({ gain, osc, note, channel, track });

                } else {

                    const soundIndex = sounds.findIndex(s => s.note.value == note.value && s.channel == channel && s.track == track);

                    if(soundIndex == -1) {
                        throw new Error(`Failed to remove sound.`);
                    }

                    const sound = sounds.splice(soundIndex, 1)[0];

                    const { gain, osc } = sound;

                    // Prevent audio popping.
                    gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);

                    await Utils.wait(100);

                    gain.disconnect();
                    osc.stop();
                    osc.disconnect();

                }

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
