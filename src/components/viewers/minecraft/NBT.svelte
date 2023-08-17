
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import { convertNBT, simpleNBTObj } from "$lib/minecraft/nbt";
    import { onMount } from "svelte";
    import NbtValue from "./NBTValue.svelte";
    import pako from "pako";

    export let entry: fsFile;
    
    let container: HTMLDivElement;

    onMount(async () => {

        const nbt = convertNBT(pako.ungzip(await entry.buffer()));

        console.log(simpleNBTObj(nbt));

        new NbtValue({ target: container, props: { entry: nbt } });

    });

</script>

<div bind:this={container}></div>
