
import { fsEntry, type fsDirectory, type fsFile, fsUtils } from "./FileSystem";
import type { Viewer } from "./Viewer";



async function getAllEntriesInDataTransferDirectory(transfer: FileSystemDirectoryEntry): Promise<{ [key: string]: FileSystemEntry; }> {

    const reader = transfer.createReader();

    let entries: { [key: string]: FileSystemEntry; } = {};
    // reader can only read up to 100 entries at a time, so we have to read multiple times.
    let readCount = 0;


    do {

        let read: FileSystemEntry[] = await new Promise(resolve => {
            reader.readEntries(resolve);
        });

        readCount = read.length;

        for(const entry of read) {
            entries[entry.name] = entry;
        }

    } while(readCount > 0);


    return entries;

}



export class fsDirectory_DataTransferDirectory implements fsDirectory {

    public readonly type: fsEntry.Directory = fsEntry.Directory;
    public viewer: Viewer | null = null;
    public evaluated: boolean = false;
    public readonly name: string;
    public parent: fsDirectory | null;

    private readonly transfer: FileSystemDirectoryEntry;

    private initialized: boolean = false;
    private entries: { [key: string]: fsFile | fsDirectory } = {};

    constructor(transfer: FileSystemDirectoryEntry, name: string = 'ROOT', parent: fsDirectory | null = null) {
        this.transfer = transfer;
        this.name = name;
        this.parent = parent;
    }

    private async init(): Promise<void> {

        if(this.initialized) return;

        const entries = await getAllEntriesInDataTransferDirectory(this.transfer);


        this.entries = {};

        for(const key in entries) {
            const value = entries[key];

            if(value.isFile) {

                const file: File = await new Promise(resolve => (value as FileSystemFileEntry).file(resolve));

                this.entries[key] = new fsUtils.fsFile_Blob(file, key, this);

            } else if(value.isDirectory) {

                const dir = value as FileSystemDirectoryEntry;

                this.entries[key] = new fsDirectory_DataTransferDirectory(dir, key, this);
                
            }
        }

        this.initialized = true;
        
    }

    public async list(): Promise<{ [key: string]: fsDirectory | fsFile; }> {

        if(!this.initialized) {
            await this.init();
        }

        // TODO: Don't do this.
        // Just incase the keys get changed outside of this.
        return {...this.entries};

    }

    public async get(name: string): Promise<fsDirectory | fsFile | null> {

        if(!this.initialized) {
            await this.init();
        }

        return this.entries[name] ?? null;

    }

    public async set(name: string, entry: fsFile | fsDirectory | null): Promise<void> {

        if(!this.initialized) {
            await this.init();
        }

        if(entry == null) {
            delete this.entries[name];
        } else {
            entry.parent = this;
            this.entries[name] = entry;
        }

    }

}


