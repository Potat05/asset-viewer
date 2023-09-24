
import type { LanguageFn } from "highlight.js";
import { ImportRegistry } from "$lib/ImportRegistry";



export const languageRegistry = new ImportRegistry<LangValidationType, LanguageFn, string>();



type LangValidationType = {
    type: 'filename',
    filename: string;
} | {
    type: 'langname',
    langname: string;
}

function addLang(name: string, filenameRegex: RegExp, importfn: () => Promise<{ default: LanguageFn }>): void {
    languageRegistry.addRegistryItem(
        value => {
            if(value.type == 'filename') {
                return filenameRegex.test(value.filename);
            } else if(value.type == 'langname') {
                return (value.langname.toLowerCase() == name);
            }
            return false;
        },
        importfn,
        name
    );
}





addLang('plaintext', /$-/, () => import("highlight.js/lib/languages/plaintext"));
addLang('javascript', /\.m?js$/, () => import("highlight.js/lib/languages/javascript"));
addLang('typescript', /\.(?:d\.)?ts$/, () => import("highlight.js/lib/languages/typescript"));
addLang('json', /\.(?:json|vmt)$/, () => import("highlight.js/lib/languages/json"));
addLang('xml', /\.(?:xml|html|svelte)$/, () => import("highlight.js/lib/languages/xml"));
addLang('markdown', /\.md$/, () => import("highlight.js/lib/languages/markdown"));
addLang('python', /\.py$/, () => import("highlight.js/lib/languages/python"));
addLang('bash', /\.sh$/, () => import("highlight.js/lib/languages/bash"));
addLang('cpp', /\.(?:c|cpp|h|hpp|glsl|vsh|fsh)$/, () => import("highlight.js/lib/languages/cpp"));
addLang('rust', /\.rs$/, () => import("highlight.js/lib/languages/rust"));
