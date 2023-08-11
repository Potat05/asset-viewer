import { fsEntry } from "$lib/FileSystem";
import { Utils } from "$lib/Utils";
import type { Viewer } from "$lib/Viewer";
import { decompileScript } from "$lib/renpy/script/decompile";
import { loadScript } from "$lib/renpy/script/load";
import Viewer_RenPy_Script from "../../../components/viewers/renpy/Script.svelte";

const viewer: Viewer = {
    namespace: 'renpy.script',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.File) return false;
        return entry.name.endsWith('.rpyc') || entry.name.endsWith('.rpy');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {
            new Viewer_RenPy_Script({ target, props: { entry } });
        } else {
            throw new Error('Tried to create renpy.script viewer with directory.');
        }

    }
};

export default viewer;
