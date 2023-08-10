import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Image from "../../../components/viewers/basic/Image.svelte";

const viewer: Viewer = {
    namespace: 'imagefile',
    priority: 1,
    isValid: async entry => {
        return entry.type == fsEntry.File && [
            'png',
            'jpg',
            'jpeg',
            'jfif',
            'tiff',
            'webp',
            'gif',
            'svg',
            'bmp'
        ].includes(entry.name.split('.').pop() ?? '');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Image({ target, props: { entry } });
        } else {
            throw new Error('Tried to create image viewer with directory.');
        }

    }
};

export default viewer;
