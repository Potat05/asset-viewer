
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import Code from "../../Code.svelte";

    export let entry: fsFile;

    export let langName: string;

</script>

{#await entry.blob() then blob}

    {#await blob.text() then code}

        <Code code={code} langName={langName} />

    {/await}

{/await}
