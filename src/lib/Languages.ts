
import type { LanguageType } from "svelte-highlight/languages";



type Language = {
    match: RegExp;
    name: string;
    lang: LanguageType<string>;
}

const LANGUAGES: Language[] = [];

function addLang(match: RegExp, lang: LanguageType<string>): void {

    if(!lang.name) {
        throw new Error('Language name invalid.');
    }

    LANGUAGES.push({
        match,
        name: lang.name,
        lang
    });

}

export function getLangFromFilename(filename: string): LanguageType<string> | null {

    for(const lang of LANGUAGES) {
        if(lang.match.test(filename)) {
            return lang.lang;
        }
    }

    return null;

}

export function getLangFromName(name: string): LanguageType<string> | null {

    for(const lang of LANGUAGES) {
        if(lang.name == name) {
            return lang.lang;
        }
    }
    
    return null;

}





import lang_javascript from "svelte-highlight/languages/javascript";
addLang(/\.m?js$/, lang_javascript);

import lang_typescript from "svelte-highlight/languages/typescript";
addLang(/\.(?:d\.)?ts$/, lang_typescript);

import lang_json from "svelte-highlight/languages/json";
addLang(/\.json$/, lang_json);

import lang_xml from "svelte-highlight/languages/xml";
addLang(/\.(?:xml|html|svelte)$/, lang_xml);

import lang_markdown from "svelte-highlight/languages/markdown";
addLang(/\.md$/, lang_markdown);

import lang_python from "svelte-highlight/languages/python";
addLang(/\.py$/, lang_python);

import lang_bash from "svelte-highlight/languages/bash";
addLang(/\.sh$/, lang_bash);

import lang_cpp from "svelte-highlight/languages/cpp";
addLang(/\.(?:c|cpp|h|hpp|glsl|vsh|fsh)$/, lang_cpp);

import lang_rust from "svelte-highlight/languages/rust";
addLang(/\.rs$/, lang_rust);
