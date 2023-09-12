import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Image from "../../../components/viewers/basic/Image.svelte";

const viewer: Viewer = {
    namespace: 'image',
    priority: 1,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Image({ target, props: { entry } });
        } else {
            throw new Error('Tried to create image viewer with directory.');
        }

    },
    getIcon: async entry => {

        if(entry.type == fsEntry.File) {
            return URL.createObjectURL(await entry.blob());
        }
        
        return null;

    }
};

export default viewer;
