
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";

    export let entry: fsFile;

</script>

<style>

    pre {
        color: white;
    }

</style>

{#await entry.blob() then blob}

    {#await blob.text() then text}

        <pre>{text}</pre>

    {/await}

{/await}
