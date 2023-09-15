
<script lang="ts">
    import type { fsFile } from "$lib/FileSystem";
    import { Marked } from "marked";
    import { markedHighlight } from "marked-highlight";
    import hljs from "highlight.js/lib/core";
    import { languageRegistry } from "$lib/Languages";

    export let entry: fsFile;

    const marked = new Marked(
        // <h#> Id.
        {
            async: false,
            renderer: {
                heading: (text, level, raw) => {

                    return `<h${level} id="${raw.toLowerCase().replace(' ', '_')}">${text}</h${level}>`;

                }
            }
        },
        // <code> Highlighting.
        markedHighlight({
            langPrefix: 'hljs language-',
            async: true,
            highlight: async (code, langname) => {

                const lang = await languageRegistry.get({ type: 'langname', langname });

                if(lang == null) return code;
                
                hljs.registerLanguage(lang.extra, lang.import);

                return hljs.highlight(code, { language: lang.extra }).value;

            }
        })
    );

</script>

<style>

    .markdown-container {
        background-color: #282c34;
        color: #abb2bf;
        overflow-x: auto;
        width: 100vw;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .markdown-scroll {
        display: inline-block;
        max-width: 100vw;
    }

    /* I'm so sorry. */
    .markdown-container :global(h1), .markdown-container :global(h2), .markdown-container :global(h3), .markdown-container :global(h4), .markdown-container :global(h5), .markdown-container :global(h6) {
        color: white;
    }

    .markdown-container :global(pre) {
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
    }

    .markdown-container :global(code) {
        background-color: black !important;
    }

    .markdown-container :global(a) {
        color: #2f81f7;
        text-decoration-color: #2f81f7;
    }

</style>

<div class="markdown-container">
    <div class="markdown-scroll">
        {#await entry.blob() then blob}
            {#await blob.text() then text}

                {#await marked.parse(text) then parsed}
                    {@html parsed}
                {/await}

            {/await}
        {/await}
    </div>
</div>