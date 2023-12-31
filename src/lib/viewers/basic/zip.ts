import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { readZip } from "$lib/zip";

const viewer: Viewer = {
    namespace: 'zip',
    priority: 1,
    transform: async entry => {

        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create zip archive viewer with invalid entry type.');
        }

        const zipDir = await readZip(await entry.blob(), entry.name, entry.parent);

        return zipDir;

    }
};

export default viewer;
