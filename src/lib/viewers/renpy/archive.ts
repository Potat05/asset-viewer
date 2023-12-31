import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { ArchiveReader } from "$lib/renpy/archive";

const viewer: Viewer = {
    namespace: 'renpy.archive',
    priority: 10,
    transform: async entry => {

        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create renpy archive viewer with invalid entry type.');
        }

        const reader = new ArchiveReader(await entry.blob());
        const dir = await reader.readArchive();

        dir.name = entry.name;
        dir.parent = entry.parent;

        return dir;

    }
};

export default viewer;
