
<script lang="ts">
    import type { fsDirectory } from "$lib/FileSystem";
    import { onMount } from "svelte";
    import { World } from "$lib/minecraft/world";

    export let entry: fsDirectory;

    onMount(async () => {

        const world = new World(entry);

        console.log(world);

        const region = await world.getRegion(0, 0);

        if(!region) return;

        await region.init();

        console.log(region);

        const chunk = await region.getChunk(0, 0);

        if(!chunk) return;

        console.log(chunk);

        console.log(chunk.getBlock(0, 0, 0));

    });

</script>
