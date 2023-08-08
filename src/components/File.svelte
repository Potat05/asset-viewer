
<script lang="ts">
    import { onMount } from "svelte";
    import { openViewer, findViewer } from "$lib/viewer/Viewer";
    import type { fsFile } from "$lib/FileSystem";

    export let file: fsFile;



    onMount(async () => {
        file.viewer = await findViewer(file);
    });


</script>



<style>

</style>



<div class="file-container">

    <button>{file.name}</button>

    {#if file.viewer}
        
        <button on:click={() => openViewer(file)}>OPEN</button>

    {/if}

</div>
