
<script lang="ts">
    import { openViewer, viewerIcon } from "$lib/Viewer";
    import type { fsFile } from "$lib/FileSystem";

    export let file: fsFile;

</script>



<style>

    * {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 500;
        color: white;
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
        height: 24px;
        margin: 0;
        padding: 2px;
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
        on:click={() => openViewer(file)}
    >

        {#await viewerIcon(file) then icon}

            <div class="icon-container">

                {#if icon == null}

                    <img src="/bootstrap-icons/file-earmark.svg" alt="File Icon">

                {:else}

                    <img src={icon} alt="File Icon"/>

                {/if}

            </div>
            
        {/await}


        <div class="name">{file.name}</div>

    </div>

</div>
