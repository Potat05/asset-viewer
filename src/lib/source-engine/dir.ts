
import { fsEntry, type fsDirectory, type fsFile } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";



export class MergedDirectory implements fsDirectory {
    public viewer: Viewer | null = null;

    public readonly type: fsEntry.Directory = fsEntry.Directory;
    public readonly name: string;
    public parent: fsDirectory | null;

    private dirs: fsDirectory[];

    constructor(dirs: fsDirectory[], name: string, parent: fsDirectory | null) {
        this.dirs = dirs;
        this.name = name;
        this.parent = parent;
    }

    async list(): Promise<{ [key: string]: fsDirectory | fsFile; }> {
        let list: {[key: string]: fsDirectory | fsFile} = {};
        for(const dir of this.dirs) {
            const dirEntries = await dir.list();
            for(const [ name, entry ] of Object.entries(dirEntries)) {
                if(list[name]) continue;
                list[name] = entry;
            }
        }
        return list;
    }

    async get(name: string): Promise<fsDirectory | fsFile | null> {
        for(const dir of this.dirs) {
            const entry = await dir.get(name);
            if(entry) return entry;
        }
        return null;
    }

    set(name: string, entry: fsDirectory | fsFile | null): Promise<void> {
        throw new Error('Cannot set on merged directory.');
    }

}



export async function getSourceEngineAssetsDir(base: fsDirectory, extra: fsDirectory[] = []): Promise<fsDirectory> {

    // TODO: Use steam_appid.txt & */gameinfo.txt to find what game it is and adjust paths to match.
    if(base.name != 'Team Fortress 2') {
        throw new Error('Team Fortress 2 is the only supported source engine game for now.');
    }

    let dirs = [ ...extra ];

    const assetPaths = [
        'tf',
        'tf/tf2_misc_dir.vpk',
        'tf/tf2_sound_dir.vpk',
        'tf/tf2_textures_dir.vpk',
    ];

    for(const assetPath of assetPaths) {
        const entry = await base.get(assetPath);
        // TODO: VPK support.
        if(entry == null || entry.type != fsEntry.Directory) continue;
        dirs.push(entry);
    }

    return new MergedDirectory(dirs, base.name, null);

}

