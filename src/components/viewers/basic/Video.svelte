
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";

    export let entry: fsFile;

</script>

{#await entry.blob() then blob}

    <!-- svelte-ignore a11y-media-has-caption -->
    <video src={URL.createObjectURL(blob)} controls/>

{/await}
