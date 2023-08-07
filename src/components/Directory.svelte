
<script lang="ts">
    import { fsEntry, type fsDirectory } from "$lib/FileSystem";
    import File from "./File.svelte";

    export let dir: fsDirectory;

    export let expanded: boolean = false;

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
