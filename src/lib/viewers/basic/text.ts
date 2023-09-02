import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Text from "../../../components/viewers/basic/Code.svelte";

const viewer: Viewer = {
    namespace: 'text',
    priority: 0,
    isValid: async entry => {
        // The old way of doing this was using Utils.isBinary.
        // But once zip files were implemented it was a bad idea because
        // we would need to decompress the whole file to see if it is binary.
        return entry.type == fsEntry.File && [
            'txt',
            'gitignore',
            'npmrc',
            'license',
            'cfg',
            'properties',
            'url',
            'conf',
            'config'
        ].includes(entry.name.split('.').pop()?.toLowerCase() ?? '');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Text({ target, props: { entry, langName: 'plaintext' } });
        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-text.svg";
    }
};

export default viewer;
