import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_Markdown from "../../../components/viewers/basic/Markdown.svelte";

const viewer: Viewer = {
    namespace: 'markdown',
    priority: 2,
    isValid: async entry => {
        return entry.type == fsEntry.File && entry.name.toLowerCase().endsWith('.md');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_Markdown({ target, props: { entry } });
        } else {
            throw new Error('Tried to create markdown viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/markdown.svg";
    }
};

export default viewer;
