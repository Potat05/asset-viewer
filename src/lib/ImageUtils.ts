


export namespace ImageUtils {

    export function imgBuffer2img(buffer: ArrayBuffer): Promise<HTMLImageElement> {

        const img = new Image();
        img.src = URL.createObjectURL(new Blob([ buffer ]));

        return new Promise((resolve, reject) => {

            function loadListener() {
                img.removeEventListener('load', loadListener);
                img.removeEventListener('error', errorListener);
                resolve(img);
            }
    
            function errorListener(ev: ErrorEvent) {
                reject(ev.message);
                img.removeEventListener('load', loadListener);
                img.removeEventListener('error', errorListener);
            }
    
            img.addEventListener('load', loadListener);
            img.addEventListener('error', errorListener);

        });

    }

    export async function imgBuffer2imgData(buffer: ArrayBuffer): Promise<ImageData> {

        const img = await imgBuffer2img(buffer);

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        if(ctx == null) {
            throw new Error('2d canvas context not supported on browser or machine.');
        }

        ctx.drawImage(img, 0, 0);

        return ctx.getImageData(0, 0, img.width, img.height);

    }

    export function imgData2url(img: ImageData): string {

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        if(ctx == null) {
            throw new Error('2d canvas context not supported on browser or machine.');
        }

        ctx.putImageData(img, 0, 0);

        return canvas.toDataURL('image/webp', 1);

    }

}


