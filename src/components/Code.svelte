
<script lang="ts">
    import hljs from "highlight.js";
    import { getLangFromName } from "$lib/Languages";
    import { onMount } from "svelte";

    export let code: string;

    export let langName: string;

    let html: string;

    onMount(async () => {
        const langContainer = getLangFromName(langName);

        if(!langContainer) {
            throw new Error('Catastrophic error on finding language.');
        }

        const lang = await langContainer.get();
        hljs.registerLanguage(langContainer.name, lang);

        html = hljs.highlight(code, { language: langContainer.name }).value;
    })

</script>

<style>

    pre {
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
    }

</style>

{#if html}
    <pre><code>{@html html}</code></pre>
{/if}
