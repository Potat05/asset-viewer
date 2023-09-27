import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { readVpk } from "$lib/source-engine/vpk";



const viewer: Viewer = {
    namespace: 'source-engine.vpk',
    priority: 2,
    transform: async entry => {
        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create vpk archive viewer with invalid entry type.');
        }

        const read = await readVpk(entry);

        const parent = entry.parent;
        if(parent) {
            // Remove .vpk files
            for(const entry of read.from) {
                await parent.set(entry.name, null);
            }
        }

        return read.vpk;

    }
};

export default viewer;
