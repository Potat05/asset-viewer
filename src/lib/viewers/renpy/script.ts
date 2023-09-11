import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { decompileScript } from "$lib/renpy/script/decompile";
import { loadScript } from "$lib/renpy/script/load";
import Code from "../../../components/Code.svelte";

const viewer: Viewer = {
    namespace: 'renpy.script',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.File) return false;
        return entry.name.endsWith('.rpyc') || entry.name.endsWith('.rpy');
    },
    createViewer: async (entry, target) => {

        if(entry.type != fsEntry.File) {
            throw new Error('Tried to create renpy.script viewer with directory.');
        }

        if(entry.name.endsWith('.rpyc')) {

            new Code({ target, props: {
                code: decompileScript(loadScript(await entry.buffer())),
                langname: 'python'
            } });

        } else if(entry.name.endsWith('.rpy')) {

            new Code({ target, props: {
                code: await (await entry.blob()).text(),
                langname: 'python'
            } });

        }

    }
};

export default viewer;
