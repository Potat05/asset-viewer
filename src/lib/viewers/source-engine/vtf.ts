import { fsEntry } from "$lib/FileSystem";
import type { Viewer } from "$lib/Viewer";
import { VTF } from "$lib/source-engine/vtf";
import { ImageUtils } from "$lib/ImageUtils";
import { WebpAnimationBuilder } from "$lib/Webp";

const viewer: Viewer = {
    namespace: 'source-engine.vtf',
    priority: 2,
    createViewer: async (entry, target) => {

        if(entry.type == fsEntry.File) {

            const vtf = new VTF(await entry.buffer());

            for(let mipmap = 0; mipmap < vtf.mipmaps; mipmap++) {
    
                const img = document.createElement('img');
                target.appendChild(img);
    
                if(vtf.frames == 0) {
    
                    const tex = vtf.getTexture(mipmap);
    
                    img.src = ImageUtils.imgData2url(tex.getImageData());
    
                } else {

                    const [ width, height ] = vtf.getSize(mipmap);
    
                    const builder = new WebpAnimationBuilder({
                        canvasWidth: width,
                        canvasHeight: height,
                        defaultFrameDurationMs: 1000 / 7
                    });
    
                    for(let frame = 0; frame < vtf.frames; frame++) {
                        const tex = vtf.getTexture(mipmap, frame);
                        builder.addFrame(tex.getImageData());
                    }
    
                    img.src = builder.generateAnimationURL();
    
                }

            }

        } else {
            throw new Error('Tried to create vtf viewer with directory.');
        }

    },
    getIcon: async entry => {

        if(entry.type == fsEntry.File) {

            const tex = await VTF.getThumbnail(await entry.blob(), 16, 16);

            if(tex == null) return '/asset-viewer/bootstrap-icons/file-earmark-image.svg';

            const texImg = tex.getImageData();
            return ImageUtils.imgData2url(texImg);

        }

        return null;

    }
};

export default viewer;
