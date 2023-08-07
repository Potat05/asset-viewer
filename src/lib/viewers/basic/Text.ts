import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/viewer/Viewer";
import Text from "../../../components/viewers/basic/Text.svelte";

const viewer: Viewer = {
    namespace: 'textfile',
    priority: 0,
    isValid: async entry => {
        return entry.type == fsEntry.File;
    },
    transform: async entry => entry,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Text({ target, props: { entry } });
        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    }
};

export default viewer;
