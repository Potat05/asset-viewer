import { fsEntry } from "$lib/FileSystem";
import { getLangFromFilename } from "$lib/Languages";
import type { Viewer } from "$lib/Viewer";
import Viewer_Code from "../../../components/viewers/basic/Code.svelte";



const viewer: Viewer = {
    namespace: 'code',
    priority: 1,
    isValid: async entry => {
        return entry.type == fsEntry.File && getLangFromFilename(entry.name) != null;
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            const lang = getLangFromFilename(entry.name);

            if(lang == null) {
                throw new Error('Catastrophic error that should never happen, language does not exist but validation passed?');
            }

            new Viewer_Code({ target, props: { entry, language: lang } });

        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-code.svg";
    }
};

export default viewer;
