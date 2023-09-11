
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import Code from "../../Code.svelte";

    export let entry: fsFile;

    export let langname: string;

</script>

{#await entry.blob() then blob}

    {#await blob.text() then code}

        <Code {code} {langname} />

    {/await}

{/await}
