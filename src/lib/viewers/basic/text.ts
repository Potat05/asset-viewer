import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Text from "../../../components/viewers/basic/Code.svelte";

const viewer: Viewer = {
    namespace: 'text',
    priority: 0,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Text({ target, props: { entry, langname: 'plaintext' } });
        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-text.svg";
    }
};

export default viewer;
