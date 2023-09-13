import { fsEntry, fsUtils } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import ImageView from "../../../components/ImageView.svelte";

const viewer: Viewer = {
    namespace: 'image',
    priority: 1,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            const blob = await entry.blob();

            new ImageView({ target, props: {
                src: URL.createObjectURL(blob),
                size: blob.size,
                title: entry.name,
                alt: fsUtils.getPath(entry),
            } });

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
