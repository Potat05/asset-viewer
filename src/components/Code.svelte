
<script lang="ts">
    import hljs from "highlight.js";
    import { languageRegistry } from "$lib/Languages";
    import { onMount } from "svelte";

    export let code: string;

    export let langname: string;

    $: lowerLangName = langname.toLowerCase();

    let html: string;

    onMount(async () => {

        const lang = await languageRegistry.get({ type: 'langname', langname });

        if(lang == null) {
            throw new Error(`Could not find language for "${langname}".`);
        }

        hljs.registerLanguage(lang.extra, lang.import);

        html = hljs.highlight(code, { language: lang.extra }).value;
        
    });

</script>

<style>

    pre {
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
    }

    code {
        background-color: black !important;
    }

</style>

{#if html}
    <pre><code class="hljs language-{lowerLangName}">{@html html}</code></pre>
{/if}
