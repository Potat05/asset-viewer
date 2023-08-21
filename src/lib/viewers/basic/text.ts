import { fsEntry } from "$lib/FileSystem";
import { Utils } from "$lib/Utils";
import type { Viewer } from "$lib/Viewer";
import Viewer_Text from "../../../components/viewers/basic/Text.svelte";

const viewer: Viewer = {
    namespace: 'text',
    priority: 0,
    isValid: async entry => {
        if(entry.type != fsEntry.File) return false;
        const blob = await entry.blob();
        if(blob.size == 0) return true;
        return !Utils.isBinary(await (await entry.blob()).slice(0, 1024).arrayBuffer());
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Text({ target, props: { entry } });
        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/bootstrap-icons/file-earmark-text.svg";
    }
};

export default viewer;
