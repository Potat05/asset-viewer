
import type { LanguageFn } from "highlight.js";
import { ImportRegistry } from "$lib/ImportRegistry";



type LangValidationType = {
    type: 'filename',
    filename: string;
} | {
    type: 'langname',
    langname: string;
}

function validateFunc(regex: RegExp, name: string): (value: LangValidationType) => boolean {
    return (value: LangValidationType) => {
        if(value.type == 'filename') {
            return regex.test(value.filename);
        } else if(value.type == 'langname') {
            return (value.langname.toLowerCase() == name);
        }
        return false;
    }
}



export const languageRegistry = new ImportRegistry<LangValidationType, LanguageFn, string>();



languageRegistry.addRegistryItem(validateFunc(/$-/, 'plaintext'), () => import("highlight.js/lib/languages/plaintext"), 'plaintext'); // Never matches on filename.
languageRegistry.addRegistryItem(validateFunc(/\.m?js$/, 'javascript'), () => import("highlight.js/lib/languages/javascript"), 'javascript');
languageRegistry.addRegistryItem(validateFunc(/\.(?:d\.)?ts$/, 'typescript'), () => import("highlight.js/lib/languages/typescript"), 'typescript');
languageRegistry.addRegistryItem(validateFunc(/\.json$/, 'json'), () => import("highlight.js/lib/languages/json"), 'json');
languageRegistry.addRegistryItem(validateFunc(/\.(?:xml|html|svelte)$/, 'xml'), () => import("highlight.js/lib/languages/xml"), 'xml');
languageRegistry.addRegistryItem(validateFunc(/\.md$/, 'markdown'), () => import("highlight.js/lib/languages/markdown"), 'markdown');
languageRegistry.addRegistryItem(validateFunc(/\.py$/, 'python'), () => import("highlight.js/lib/languages/python"), 'python');
languageRegistry.addRegistryItem(validateFunc(/\.sh$/, 'bash'), () => import("highlight.js/lib/languages/bash"), 'bash');
languageRegistry.addRegistryItem(validateFunc(/\.(?:c|cpp|h|hpp|glsl|vsh|fsh)$/, 'cpp'), () => import("highlight.js/lib/languages/cpp"), 'cpp');
languageRegistry.addRegistryItem(validateFunc(/\.rs$/, 'rust'), () => import("highlight.js/lib/languages/rust"), 'rust');
