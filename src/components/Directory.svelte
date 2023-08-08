
<script lang="ts">
    import { fsEntry, type fsDirectory, fsUtils } from "$lib/FileSystem";
    import { openViewer, viewerRegistry } from "$lib/viewer/Viewer";
    import { onMount } from "svelte";
    import File from "./File.svelte";
    import { viewerContainerStore } from "../routes/stores";

    export let dir: fsDirectory;

    export let expanded: boolean = false;



    onMount(async () => {

        if(dir.viewer == null) {

            console.debug(`Finding viewer for "${fsUtils.getPath(dir)}"`);

            for(const viewer of viewerRegistry) {
                if(await viewer.isValid(dir)) {
                    dir.viewer = viewer;
                    break;
                }
            }

            if(dir.viewer != null) {

                const transform = await dir.viewer.transform(dir);

                fsUtils.transform(dir, transform);

            }

        }

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
