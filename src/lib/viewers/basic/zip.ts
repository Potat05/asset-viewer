import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { readZip } from "$lib/zip";

const viewer: Viewer = {
    namespace: 'zip',
    priority: 1,
    isValid: async entry => {
        return entry.type == fsEntry.File && entry.name.endsWith('.zip');
    },
    transform: async entry => {

        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create zip archive viewer with invalid entry type.');
        }

        const zipDir = await readZip(entry);

        return zipDir;

    }
};

export default viewer;
