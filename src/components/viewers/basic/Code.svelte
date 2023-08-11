
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import Highlight from "svelte-highlight/Highlight.svelte";
    import type { LanguageType } from "svelte-highlight/languages";

    export let entry: fsFile;

    export let language: LanguageType<string>;

</script>

{#await entry.blob() then blob}

    {#await blob.text() then text}

        <Highlight {language} code={text} />

    {/await}

{/await}
