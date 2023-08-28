
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import * as marked from "marked";

    export let entry: fsFile;

</script>

<style>

    .markdown-container {
        background-color: white;
        color: black;
        overflow-x: auto;
        width: 100vw;
    }

    .markdown-scroll {
        display: inline-block;
        max-width: 100vw;
    }

</style>

{#await entry.blob() then blob}

    {#await blob.text() then text}

        <div class="markdown-container">
            <div class="markdown-scroll">
                {@html marked.parse(text)}
            </div>
        </div>

    {/await}

{/await}
