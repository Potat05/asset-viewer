import { EventDispatcher } from "$lib/EventDispatcher";
import type { Chunk, Region, World } from "./world";



function chunkDist(cx1: number, cz1: number, cx2: number, cz2: number): number {
    return Math.sqrt((cx1 - cx2)**2 + (cz1 - cz2)**2);
}



type InvalidChunk = {
    cx: number;
    cz: number;
    data: null;
}

type InvalidRegion = {
    rx: number;
    rz: number;
    file: null;
}



export class WorldLoader extends EventDispatcher<{
    'loadchunk': (chunk: Chunk) => void;
    'unloadchunk': (chunk: Chunk) => void;
}> {

    public world: World;

    public renderDistance: number;
    public unloadDistance: number;

    private chunks: (Chunk | InvalidChunk)[] = [];
    private regions: (Region | InvalidRegion)[] = [];

    constructor(world: World, renderDistance: number, unloadDistance: number) {
        super();

        this.world = world;
        this.renderDistance = renderDistance;
        this.unloadDistance = unloadDistance;
    }



    private async getRegion(rx: number, rz: number): Promise<Region | InvalidRegion> {

        const findRegion = this.regions.find(region => region.rx == rx && region.rz == rz);
        if(findRegion != null) {
            return findRegion;
        }

        const region = await this.world.getRegion(rx, rz);

        if(region == null) {
            const newRegion = { rx, rz, file: null };
            this.regions.push(newRegion);
            return newRegion;
        }

        await region.init();

        this.regions.push(region);
        return region;

    }

    private async loadChunk(cx: number, cz: number) {

        if(this.chunks.some(chunk => chunk.cx == cx && chunk.cz == cz)) return;

        const region = await this.getRegion(Math.floor(cx / 32), Math.floor(cz / 32));

        if(region.file == null) return;

        const chunk = await region.getChunk(cx, cz);

        if(chunk == null) {
            this.chunks.push({ cx, cz, data: null });
            return;
        }

        this.chunks.push(chunk);

        this.dispatchEvent('loadchunk', chunk);

    }



    isUpdating: boolean = false;

    public async update(lcx: number, lcz: number): Promise<void> {

        if(this.isUpdating) return;
        this.isUpdating = true;



        // Unload chunks
        this.chunks = this.chunks.filter(chunk => {
            if(chunkDist(lcx, lcz, chunk.cx, chunk.cz) > this.unloadDistance) {
                if(chunk.data != null) {
                    this.dispatchEvent('unloadchunk', chunk);
                }
                return false;
            }
            return true;
        });

        // Load chunks
        // TODO - Make this load chunks in a circular manner.
        for(let dcx = -this.renderDistance; dcx < this.renderDistance; dcx++) {
            for(let dcz = -this.renderDistance; dcz < this.renderDistance; dcz++) {

                if(chunkDist(0, 0, dcx, dcz) >= this.renderDistance) continue;

                const cx = lcx + dcx;
                const cz = lcz + dcz;

                await this.loadChunk(cx, cz);

            }            
        }



        this.isUpdating = false;

    }


}


