import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Code from "../../../components/Code.svelte";
import { parseMidi } from "$lib/midi/midi";

const viewer: Viewer = {
    namespace: 'midi.midi',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.File) return false;
        return entry.name.endsWith('.mid') || entry.name.endsWith('.midi');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            new Code({ target, props: {
                code: JSON.stringify(parseMidi(await entry.buffer()), undefined, 4),
                langName: 'json'
            } });

        } else {
            throw new Error('Tried to create midi viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-music.svg";
    }
};

export default viewer;
