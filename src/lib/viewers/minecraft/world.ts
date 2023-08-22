import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import Viewer_World from "../../../components/viewers/minecraft/World.svelte";

const viewer: Viewer = {
    namespace: 'minecraft.world',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.Directory) return false;

        return await entry.get('level.dat') !== null;
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.Directory) {

            new Viewer_World({ target, props: { entry } });

        } else {
            throw new Error('Tried to create world viewer with file.');
        }

    },
    getIcon: async (entry) => {
        
        if(entry.type == fsEntry.Directory) {

            const icon = await entry.get('icon.png');

            if(icon == null) {
                return "/asset-viewer/bootstrap-icons/boxes.svg";
            }

            if(icon.type == fsEntry.Directory) {
                return null;
            }

            return URL.createObjectURL(await icon.blob());

        }

        return null;

    },
};

export default viewer;
