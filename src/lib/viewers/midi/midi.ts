import { fsEntry } from "$lib/FileSystem";
import { Utils } from "$lib/Utils";
import type { Viewer } from "$lib/Viewer";
import { EVENT_META, EVENT_MIDI, MIDI_FORMAT, parseMidi } from "$lib/midi/midi";
import { MidiNote, MidiPlayer } from "$lib/midi/player";
import Viewer_Midi from "../../../components/viewers/midi/Midi.svelte";
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

            new Viewer_Midi({
                target,
                props: { entry }
            });

        } else {
            throw new Error('Tried to create midi viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-music.svg";
    }
};

export default viewer;
