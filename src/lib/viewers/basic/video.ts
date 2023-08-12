import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Video from "../../../components/viewers/basic/Video.svelte";

const viewer: Viewer = {
    namespace: 'video',
    priority: 1,
    isValid: async entry => {
        return entry.type == fsEntry.File && [
            'mp4',
            'mov',
            'webm'
        ].includes(entry.name.split('.').pop() ?? '');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Video({ target, props: { entry } });
        } else {
            throw new Error('Tried to create video viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/bootstrap-icons/file-play.svg";
    }
};

export default viewer;
