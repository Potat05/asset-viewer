import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_NBT from "../../../components/viewers/minecraft/NBT.svelte";

const viewer: Viewer = {
    namespace: 'minecraft.nbt',
    priority: 2,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            new Viewer_NBT({ target, props: { entry } });

        } else {
            throw new Error('Tried to create nbt viewer with directory.');
        }

    }
};

export default viewer;
