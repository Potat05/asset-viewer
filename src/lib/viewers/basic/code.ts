import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import type { LanguageType } from "svelte-highlight/languages";
import Viewer_Code from "../../../components/viewers/basic/Code.svelte";



let LANGS: {[key: string]: LanguageType<string>} = {};

import lang_javascript from "svelte-highlight/languages/javascript";
LANGS['js'] = lang_javascript;
import lang_typescript from "svelte-highlight/languages/typescript";
LANGS['ts'] = lang_typescript;

import lang_json from "svelte-highlight/languages/json";
LANGS['json'] = lang_json;

import lang_xml from "svelte-highlight/languages/xml";
LANGS['xml'] = lang_xml;
LANGS['html'] = lang_xml;
LANGS['svelte'] = lang_xml;

import lang_markdown from "svelte-highlight/languages/markdown";
LANGS['md'] = lang_markdown;
LANGS['MD'] = lang_markdown;

import lang_python from "svelte-highlight/languages/python";
LANGS['py'] = lang_python;

import lang_bash from "svelte-highlight/languages/bash";
LANGS['sh'] = lang_bash;

import lang_cpp from "svelte-highlight/languages/cpp";
LANGS['c'] = lang_cpp;
LANGS['cpp'] = lang_cpp;
LANGS['h'] = lang_cpp;
LANGS['hpp'] = lang_cpp;
LANGS['glsl'] = lang_cpp;
LANGS['vsh'] = lang_cpp;
LANGS['fsh'] = lang_cpp;

import lang_rust from "svelte-highlight/languages/rust";
LANGS['rs'] = lang_rust;



const viewer: Viewer = {
    namespace: 'code',
    priority: 1,
    isValid: async entry => {
        return entry.type == fsEntry.File && LANGS[entry.name.split('.').pop() ?? ''] != undefined;
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            const lang = LANGS[entry.name.split('.').pop() ?? ''];

            if(lang == undefined) {
                throw new Error('Catastrophic error that should never happen, language does not exist but validation passed?');
            }

            new Viewer_Code({ target, props: { entry, language: lang } });

        } else {
            throw new Error('Tried to create text viewer with directory.');
        }

    },
    getIcon: async () => {
        return "/asset-viewer/bootstrap-icons/file-earmark-code.svg";
    }
};

export default viewer;
