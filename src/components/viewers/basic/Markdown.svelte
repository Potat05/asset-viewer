
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import * as marked from "marked";

    export let entry: fsFile;

</script>

<style>

    .markdown-container {
        background-color: white;
        color: black;
    }

</style>

{#await entry.blob() then blob}

    {#await blob.text() then text}

        <div class="markdown-container">
            {@html marked.parse(text)}
        </div>

    {/await}

{/await}
