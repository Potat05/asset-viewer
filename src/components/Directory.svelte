
<script lang="ts">
    import { fsEntry, type fsDirectory, type fsFile } from "$lib/FileSystem";
    import { findViewers, viewerIcon } from "$lib/Viewer";
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
        const list = Object.values(await dir.list());

        await Promise.all(list.map(entry => {
            return findViewers(entry);
        }))

        entries = Object.values(await dir.list())
            .sort((a, b) => {
                return a.name.localeCompare(b.name) + (b.type - a.type) * 1000;
            });

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

    .icon-container {
        height: 20px;
        margin: 0;
        padding: 4px;
    }

    .icon-container > * {
        height: 100%;
    }

</style>



<div class="container">
    
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="title"
        on:click={() => { expanded = !expanded }}
    >
        
        <!-- I am so sorry for this. -->
        {#await viewerIcon(dir) then icon}

            <div class="icon-container">

                {#if icon == null}

                    {#if !isArchive}
                        {#if !expanded}
                            <img src="/bootstrap-icons/folder-fill.svg" alt="Directory Collapsed Icon">
                        {:else}
                            <img src="/bootstrap-icons/folder.svg" alt="Directory Icon">
                        {/if}
                    {:else}
                        {#if !expanded}
                            <img src="/bootstrap-icons/archive-fill.svg" alt="Directory Collapsed Archive Icon">
                        {:else}
                            <img src="/bootstrap-icons/archive.svg" alt="Directory Archive Icon">
                        {/if}
                    {/if}

                {:else}

                    <img src={icon} alt="Directory Icon"/>

                {/if}

            </div>
            
        {/await}

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
