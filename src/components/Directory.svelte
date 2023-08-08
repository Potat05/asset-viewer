
<script lang="ts">
    import { fsEntry, type fsDirectory } from "$lib/FileSystem";
    import { findViewer, openViewer } from "$lib/viewer/Viewer";
    import { onMount } from "svelte";
    import File from "./File.svelte";

    export let dir: fsDirectory;

    export let expanded: boolean = false;



    onMount(async () => {
        dir.viewer = await findViewer(dir);
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

    {#if dir.viewer}

        <button on:click={() => openViewer(dir)}>OPEN</button>

    {/if}

    {#if expanded}

        <div class="dir-entries">
        
            {#await dir.list() then entries }
                
                {#each Object.entries(entries) as [ name, entry ]}
        
                    {#if entry.type == fsEntry.File}
                        <File file={entry} />
                    {:else if entry.type == fsEntry.Directory}
                        <svelte:self dir={entry} />
                    {/if}
        
                {/each}
        
            {/await}
        
        </div>

    {/if}

</div>
