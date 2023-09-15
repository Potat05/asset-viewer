import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { BSP } from "$lib/source-engine/bsp";

const viewer: Viewer = {
    namespace: 'source-engine.bsp',
    priority: 2,
    // createViewer: async (entry, target) => {

    //     if(entry.type == fsEntry.File) {

    //     } else {
    //         throw new Error('Tried to create bsp viewer with directory.');
    //     }

    // },
    transform: async entry => {
        
        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create bsp pakfile archive viewer with invalid entry type.');
        }

        const bsp = new BSP(await entry.blob());

        await bsp.readHeader();

        return await bsp.getPakFile(entry.name, entry.parent);

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/boxes.svg";
    }
};

export default viewer;
