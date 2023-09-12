import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Midi from "../../../components/viewers/midi/Midi.svelte";

const viewer: Viewer = {
    namespace: 'midi.midi',
    priority: 2,
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
