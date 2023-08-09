import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Text from "../../../components/viewers/basic/Text.svelte";

const viewer: Viewer = {
    namespace: 'textfile',
    priority: 0,
    isValid: async entry => {
        return entry.type == fsEntry.File && [
            'txt',
            'json',
            'js',
            'ts',
            'svelte',
            'md',
            'html'
        ].includes(entry.name.split('.').pop() ?? '');
    },
    transform: null,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Text({ target, props: { entry } });
        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    }
};

export default viewer;
