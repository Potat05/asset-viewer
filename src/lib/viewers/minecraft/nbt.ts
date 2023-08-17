import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_NBT from "../../../components/viewers/minecraft/NBT.svelte";

const viewer: Viewer = {
    namespace: 'minecraft.nbt',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.File) return false;
        if(!entry.name.includes('.dat')) return false;
        const blob = await entry.blob();
        if(blob.size == 0) return true;

        const ident = await blob.slice(0, 2).arrayBuffer();

        return (new DataView(ident).getUint16(0, false) == 0x1F8B);
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            new Viewer_NBT({ target, props: { entry } });

        } else {
            throw new Error('Tried to create nbt viewer with directory.');
        }

    }
};

export default viewer;
