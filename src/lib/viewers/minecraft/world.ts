import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_World from "../../../components/viewers/minecraft/World.svelte";

const viewer: Viewer = {
    namespace: 'minecraft.world',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.Directory) return false;

        return await entry.get('level.dat') !== null;
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.Directory) {

            new Viewer_World({ target, props: { entry } });

        } else {
            throw new Error('Tried to create world viewer with file.');
        }

    }
};

export default viewer;
