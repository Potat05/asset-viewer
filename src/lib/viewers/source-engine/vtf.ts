import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { VTF } from "$lib/source-engine/vtf";
import { ImageUtils } from "$lib/ImageUtils";

const viewer: Viewer = {
    namespace: 'source-engine.vtf',
    priority: 2,
    isValid: async entry => {
        if(entry.type != fsEntry.File) return false;
        if(!entry.name.includes('.vtf')) return false;
        const blob = await entry.blob();
        if(blob.size == 0) return true;

        const ident = await blob.slice(0, 4).text();

        return (ident == 'VTF\0');
    },
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            const vtf = new VTF(await entry.buffer());

            const tex = vtf.textures[0][0][0][0];

            const texImg = tex.getImageData();
            const src = ImageUtils.imgData2url(texImg);
            const img = document.createElement('img');
            img.src = src;
            target.appendChild(img);

        } else {
            throw new Error('Tried to create vtf viewer with directory.');
        }

    },
    getIcon: async entry => {

        if(entry.type == fsEntry.File) {

            const tex = await VTF.getLowRes(await entry.blob())

            if(tex == null) return '/asset-viewer/bootstrap-icons/file-earmark-image.svg';

            const texImg = tex.getImageData();
            return ImageUtils.imgData2url(texImg);

        }

        return null;

    }
};

export default viewer;
