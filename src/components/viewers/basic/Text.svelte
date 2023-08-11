
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import Highlight from "svelte-highlight/Highlight.svelte";
    import lang_plaintext from "svelte-highlight/languages/plaintext";

    export let entry: fsFile;

</script>

{#await entry.blob() then blob}

    {#await blob.text() then text}

        <Highlight language={lang_plaintext} code={text} />

    {/await}

{/await}
