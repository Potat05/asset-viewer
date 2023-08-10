
<script lang="ts">
    import { openViewer } from "$lib/Viewer";
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

</style>



<div class="container">

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="title"
        on:click={() => openViewer(file)}
    >

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
        </svg>

        <div class="name">{file.name}</div>

    </div>

</div>
