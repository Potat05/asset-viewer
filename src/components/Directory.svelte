
<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile } from "$lib/FileSystem";
    import { findViewer, openViewer } from "$lib/Viewer";
    import { onMount } from "svelte";
    import File from "./File.svelte";

    export let dir: fsDirectory;

    export let expanded: boolean = false;

    let entries: (fsFile | fsDirectory)[];



    onMount(async () => {
        // await findViewer(dir);

        const list = Object.values(await dir.list());

        for(const entry of list) {

            await findViewer(entry);

        }

        entries = Object.values(await dir.list());

    });

</script>



<style>

    .dir-entries {
        display: flex;
        flex-direction: column;

        margin-left: 25px;
    }

</style>



<div class="dir-container">
    
    <button on:click={() => { expanded = !expanded }}>{dir.name}</button>

    {#if dir.viewer?.createViewer}

        <button on:click={() => openViewer(dir)}>OPEN</button>

    {/if}

    {#if expanded && entries}

        <div class="dir-entries">
        
            {#each entries as entry}
    
                {#if entry.type == fsEntry.File}
                    <File file={entry} />
                {:else if entry.type == fsEntry.Directory}
                    <svelte:self dir={entry} />
                {/if}
    
            {/each}
        
        </div>

    {/if}

</div>
