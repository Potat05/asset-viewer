
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";

    export let entry: fsFile;

</script>

{#await entry.blob() then blob}

    <img src={URL.createObjectURL(blob)} alt="{entry.name}">

{/await}
