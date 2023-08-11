
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import { decompileScript } from "$lib/renpy/script/decompile";
    import { loadScript } from "$lib/renpy/script/load";
    import Highlight from "svelte-highlight/Highlight.svelte";
    import lang_python from "svelte-highlight/languages/python";

    export let entry: fsFile;

</script>

{#await entry.blob() then blob}

    {#if entry.name.endsWith('.rpyc')}

        {#await blob.arrayBuffer() then buffer}

            <Highlight language={lang_python} code={decompileScript(loadScript(buffer))} />

        {/await}

    {:else if entry.name.endsWith('.rpy')}

        {#await blob.text() then text}

            <Highlight language={lang_python} code={text} />

        {/await}

    {/if}

{/await}
