
<script lang="ts">
    import { openViewer } from "$lib/Viewer";
    import type { fsFile } from "$lib/FileSystem";

    export let file: fsFile;

</script>



<style>

</style>



<div class="file-container">

    <button>{file.name}</button>

    {#if file.viewer?.createViewer}
        
        <button on:click={() => openViewer(file)}>OPEN</button>

    {/if}

</div>
