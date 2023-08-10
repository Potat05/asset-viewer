
<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile } from "$lib/FileSystem";
    import { findViewer, openViewer } from "$lib/Viewer";
    import { onMount } from "svelte";
    import File from "./File.svelte";

    export let dir: fsDirectory;

    let isArchive: boolean;
    $: isArchive = dir.viewer?.transform != null;

    export let expanded: boolean = false;

    let displayed: boolean = false;
    $: if(expanded && !displayed) displayed = true;

    let entries: (fsFile | fsDirectory)[];



    onMount(async () => {
        // await findViewer(dir);

        const list = Object.values(await dir.list());

        await Promise.all(list.map(entry => {
            return findViewer(entry);
        }))

        entries = Object.values(await dir.list());

    });

</script>



<style>

    * {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        color: white;
    }

    .dir-entries {
        display: flex;
        flex-direction: column;

        padding-left: 25px;

        border-left: 1px lightgray solid;
    }

    .hidden {
        display: none;
    }

    .title {
        display: flex;

        cursor: pointer;
    }

    .title:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    
    .title > * {
        margin: 5px;
    }

</style>



<div class="container">
    
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="title"
        on:click={() => { expanded = !expanded }}
    >
        
        {#if !isArchive}
            {#if !expanded}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                </svg>
            {/if}
        {:else}
            {#if !expanded}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
            {/if}
        {/if}

        <div class="name">{dir.name}</div>

    </div>

    {#if entries && displayed}

        <div
            class="dir-entries"
            class:hidden={!expanded}
        >
        
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
