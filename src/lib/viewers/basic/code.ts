import { fsEntry } from "$lib/FileSystem";
import { languageRegistry } from "$lib/Languages";
import type { Viewer } from "$lib/Viewer";
import Viewer_Code from "../../../components/viewers/basic/Code.svelte";



const viewer: Viewer = {
    namespace: 'code',
    priority: 1,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            const lang = await languageRegistry.get({ type: 'filename', filename: entry.name });

            if(lang == null) {
                throw new Error('Catastrophic error that should never happen, language does not exist but validation passed?');
            }

            new Viewer_Code({ target, props: { entry, langname: lang.extra } });

        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-code.svg";
    }
};

export default viewer;
