
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import { convertNBT } from "$lib/minecraft/nbt";
    import { onMount } from "svelte";
    import NbtValue from "./NBTValue.svelte";

    export let entry: fsFile;
    
    let container: HTMLDivElement;

    onMount(async () => {

        const nbt = convertNBT(await entry.buffer());

        new NbtValue({ target: container, props: { entry: nbt } });

    });

</script>

<div bind:this={container}></div>
