import Directory from "../components/Directory.svelte";
import type { Viewer } from "./Viewer";



export enum fsEntry {
    File = 1,
    Directory = 2
}



export interface fsFile {
    readonly type: fsEntry.File;
    viewer: Viewer | null;
    name: string;
    parent: fsDirectory | null;

    blob(): Promise<Blob>;
    buffer(): Promise<ArrayBuffer>;
}



export interface fsDirectory {
    readonly type: fsEntry.Directory;
    viewer: Viewer | null;
    name: string;
    parent: fsDirectory | null;

    list(): Promise<{ [key: string]: fsFile | fsDirectory; }>;
    get(name: string): Promise<fsFile | fsDirectory | null>;
    set(name: string, entry: fsFile | fsDirectory | null): Promise<void>;
}





export namespace fsUtils {

    /**
     * Gets the root directory. If this directory is the root, return null.
     */
    export function root(entry: fsFile | fsDirectory): fsDirectory | null {

        if(entry.parent == null) {
            if(entry.type == fsEntry.Directory) {
                return entry;
            }
            return null;
        }

        return root(entry);

    }

    /**
     * Gets the path from the root directory.
     */
    export function getPath(entry: fsFile | fsDirectory): string {

        // This does ignore the root directory name.

        if(entry.parent == null) {
            return '';
        } else {
            // TODO: Refactor, fixPath should not be used here.
            return fixPath(`${getPath(entry.parent)}/${entry.name}`);
        }

    }

    /**
     * Fix path.
     * 
     * Converts \\ to /
     * 
     * Removes starting / and ending /
     */
    export function fixPath(path: string): string {
        path = path.replace(/[\\\/]/g, '/');
        while(path.startsWith('/')) path = path.slice(1);
        while(path.endsWith('/')) path = path.slice(0, -1);
        return path;
    }

    /**
     * Gets entry from path.
     */
    export async function getDeep(dir: fsDirectory, path: string): Promise<fsFile | fsDirectory | null> {

        let stack = fixPath(path).split('/');

        let entry = dir;

        while(stack.length > 1) {

            const name = stack.shift();
            if(name == undefined) {
                throw new Error('Catastrophic error that should never happen.');
            }

            const get = await dir.get(name);

            if(
                get == null ||
                get.type != fsEntry.Directory
            ) return null;

            entry = get;

        }

        const name = stack.shift();
        if(name == undefined) {
            throw new Error('Catastrophic error that should never happen.');
        }

        return entry.get(name);

    }

    /**
     * Sets entry from path.
     */
    export async function setDeep(dir: fsDirectory, path: string, setEntry: fsFile | fsDirectory | null) {

        let stack = fixPath(path).split('/');

        let entry = dir;

        while(stack.length > 1) {

            const name = stack.shift();
            if(name == undefined) {
                throw new Error('Catastrophic error that should never happen.');
            }

            let get = await dir.get(name);

            if(get == null) {
                get = new fsUtils.fsDirectory_Container(name, entry);
                entry.set(name, get);
            }
            if(get.type != fsEntry.Directory) {
                throw new Error('setDeep incountered a file in path.');
            }

            entry = get;

        }

        const name = stack.shift();
        if(name == undefined) {
            throw new Error('Catastrophic error that should never happen.');
        }

        entry.set(name, setEntry);

    }

    /**
     * Transform the entry to a different entry.
     */
    export async function transform<To extends fsFile | fsDirectory | null>(entry: fsFile | fsDirectory, to: To): Promise<To> {
        if(entry.parent == null) {
            throw new Error('Could not transform, Entry has no parent.');
        }

        if(to == null) {

            entry.parent.set(entry.name, null);
            
        } else {
            
            to.viewer = entry.viewer;
            to.name = entry.name;
            to.parent = entry.parent;
    
            entry.parent.set(entry.name, to);

        }

        return to;

    }

    /**
     * 
     * @param dir 
     * @param callbackfn If this returns true, The entries in the directory will be included. (Does nothing for files. If return void, it will include.)
     */
    export async function forEachDeep(dir: fsDirectory, callbackfn: (path: string, entry: fsFile | fsDirectory) => Promise<boolean | void>): Promise<void> {

        let stack = [ dir ];

        while(stack.length > 0) {

            const dir = stack.pop();
            if(dir == undefined) break;

            const entries = Object.entries(await dir.list());

            for(const [ name, entry ] of entries) {

                const path = fsUtils.getPath(entry);

                const push = await callbackfn(path, entry);

                // We get the entry again because callbackfn may change it.
                const newEntry = await dir.get(name);

                if(newEntry == null) continue;

                if(newEntry.type == fsEntry.Directory) {
                    if(push === undefined || push === true) {
                        stack.push(newEntry);
                    }
                }
                
            }

        }


    }



    export class fsFile_Blob implements fsFile {
        public readonly type: fsEntry.File = fsEntry.File;
        public viewer: Viewer | null = null;
        public readonly name: string;
        public parent: fsDirectory | null;
        private _blob: Blob;

        constructor(blob: Blob, name: string, parent: fsDirectory | null) {
            this._blob = blob;
            this.name = name;
            this.parent = parent;
        }

        public async blob(): Promise<Blob> {
            return this._blob;
        }

        public async buffer(): Promise<ArrayBuffer> {
            return await this._blob.arrayBuffer();
        }
        
    }



    export class fsDirectory_Container implements fsDirectory {

        public readonly type: fsEntry.Directory = fsEntry.Directory;
        public viewer: Viewer | null = null;
        public readonly name: string;
        public parent: fsDirectory | null;

        private entries: {[key: string]: fsFile | fsDirectory} = {};

        constructor(name: string, parent: fsDirectory | null) {
            this.name = name;
            this.parent = parent;
        }

        async list(): Promise<{ [key: string]: fsDirectory | fsFile; }> {

            // TODO: Do we need to do this?
            return { ...this.entries };

        }

        async get(name: string): Promise<fsDirectory | fsFile | null> {

            return this.entries[name] ?? null;

        }

        async set(name: string, entry: fsDirectory | fsFile | null): Promise<void> {

            if(entry == null) {
                delete this.entries[name];
            } else {
                entry.parent = this;
                this.entries[name] = entry;
            }

        }

    }

}


