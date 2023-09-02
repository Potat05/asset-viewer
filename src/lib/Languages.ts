
import type { LanguageFn } from "highlight.js"



type Language = {
    match: RegExp;
    name: string;
    get: () => Promise<LanguageFn>;
}

const LANGUAGES: Language[] = [];

function addLang(match: RegExp, name: string, get: () => Promise<LanguageFn>): void {
    LANGUAGES.push({
        match,
        name,
        get
    });
}

export function getLangFromFilename(filename: string): Language | null {

    for(const lang of LANGUAGES) {
        if(lang.match.test(filename)) {
            return lang;
        }
    }

    return null;

}

export function getLangFromName(name: string): Language | null {

    for(const lang of LANGUAGES) {
        if(lang.name == name) {
            return lang;
        }
    }
    
    return null;

}



// Plaintext never matches on filename.
addLang(/$-/, 'plaintext', async () => (await import("highlight.js/lib/languages/plaintext")).default);

addLang(/\.m?js$/, 'javascript', async () => (await import("highlight.js/lib/languages/javascript")).default);

addLang(/\.(?:d\.)?ts$/, 'typescript', async () => (await import("highlight.js/lib/languages/typescript")).default);

addLang(/\.json$/, 'json', async () => (await import("highlight.js/lib/languages/json")).default);

addLang(/\.(?:xml|html|svelte)$/, 'xml', async () => (await import("highlight.js/lib/languages/xml")).default);

addLang(/\.md$/, 'markdown', async () => (await import("highlight.js/lib/languages/markdown")).default);

addLang(/\.py$/, 'python', async () => (await import("highlight.js/lib/languages/python")).default);

addLang(/\.sh$/, 'bash', async () => (await import("highlight.js/lib/languages/bash")).default);

addLang(/\.(?:c|cpp|h|hpp|glsl|vsh|fsh)$/, 'cpp', async () => (await import("highlight.js/lib/languages/cpp")).default);

addLang(/\.rs$/, 'rust', async () => (await import("highlight.js/lib/languages/rust")).default);
