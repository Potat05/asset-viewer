// https://gist.github.com/Potat05/29982021ac62e2b0e2db40caa5ba74eb

// MIT License
//
// Copyright (c) 2023 Potat05
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.



/*

    In my quest to get a decent loading icon gif, I've had to resort to making this.
    I could not find any good free to use loading icons on the web.
    (The only good one I found didn't have transparency.)
    (I tried making one in blender but my brain is too small to figure that out, so I just made one programmatically)
    But webp is such an easy format to modify and manipulate I thought it would be a good idea just to make a whole tiny lib for it.

    For this we basically just leech off of js having a built in convert to webp.
    This will only work in the browser.

    WEBP FORMAT:
        https://developers.google.com/speed/webp/docs/riff_container

    (Image sequence to animated webp.)

        ORIGINAL WEBPS
        ┏━━━━━━━━━━━━━┓
        ┃   HEADER    ┃
        ┣━━━━━━━━━━━━━┫
        ┃    IMAGE    ┃ ━━━┓    ANIMATION FRAME
        ┗━━━━━━━━━━━━━┛    ┃    ┏━━━━━━━━━━━━━┓
                           ┃    ┃ ANIM HEADER ┃
         ANIMATED WEBP     ┃    ┣━━━━━━━━━━━━━┫
        ┏━━━━━━━━━━━━━┓    ┗━━► ┃    IMAGE    ┃
        ┃   HEADER    ┃         ┗━━━━━━━━━━━━━┛
        ┣━━━━━━━━━━━━━┫                ┃
        ┃  ANIM INFO  ┃                ┃
        ┣━━━━━━━━━━━━━┫                ┃
        ┃ ANIM FRAMES ┃ ◄━━━━━━━━━━━━━━┛
        ┃      .      ┃
        ┃      .      ┃ ◄━━━━━━━━━ ━ ━ ━
        ┃      .      ┃
        ┃      .      ┃ ◄━━━━━━━━━ ━ ━ ━
        ┗━━━━━━━━━━━━━┛

*/





enum RIFF_WEBP_FOURCC {
    RIFF = 0x46464952,
    WEBP = 0x50424557,
    VP8X = 0x58385056,
    VP8  = 0x20385056,
    VP8L = 0x4C385056,
    ANIM = 0x4D494E41,
    ANMF = 0x464D4E41,
    ICCP = 0x50434349,
    EXIF = 0x46495845,
    XMP  = 0x20504D58
}



function extractImageDataChunkFromWEBP(data: ArrayBuffer): { data: ArrayBuffer, width: number, height: number } {
    // Extract frame data from WEBP
    const view = new DataView(data);
    const getUint24 = (offset: number, littleEndian: boolean = false) => {
        if(littleEndian == false) {
            throw new Error('Catastrophic error.');
        }
        return view.getUint8(offset + 0) | view.getUint16(offset + 1, true) << 8;
    }

    interface ReadChunkType {
        [RIFF_WEBP_FOURCC.RIFF]: {
            type: RIFF_WEBP_FOURCC.RIFF;
            length: number;
            riffType: number;
            chunks: ReadChunkType[keyof ReadChunkType][];
        }
        [RIFF_WEBP_FOURCC.VP8X]: {
            type: RIFF_WEBP_FOURCC.VP8X;
            length: number;
            flags: number;
            width: number;
            height: number;
        }
        [RIFF_WEBP_FOURCC.VP8]: {
            type: RIFF_WEBP_FOURCC.VP8;
            length: number;
            data: ArrayBuffer;
        }
        [RIFF_WEBP_FOURCC.VP8L]: {
            type: RIFF_WEBP_FOURCC.VP8L;
            length: number;
            data: ArrayBuffer;
        }
        [RIFF_WEBP_FOURCC.ANIM]: {
            type: RIFF_WEBP_FOURCC.ANIM;
            length: number;
            backgroundColor: number;
            loopCount: number;
        }
        [RIFF_WEBP_FOURCC.ANMF]: {
            type: RIFF_WEBP_FOURCC.ANMF;
            length: number;
            x: number;
            y: number;
            width: number;
            height: number;
            duration: number;
            flags: number;
            chunk: ReadChunkType[keyof ReadChunkType];
        }
    }

    const readChunk = (offset: number): ReadChunkType[keyof ReadChunkType] => {

        const type = view.getUint32(offset + 0, true);
        const length = view.getUint32(offset + 4, true);

        if(type == RIFF_WEBP_FOURCC.RIFF && offset == 8) {
            throw new Error('extractImageDataChunkFromWEBP: First chunk MUST be riff chunk.');
        }

        offset += 8;

        switch(type) {
            case RIFF_WEBP_FOURCC.RIFF: {

                if(length != data.byteLength - 8) {
                    throw new Error('extractImageDataChunkFromWEBP: Data length and riff length do not match.');
                }

                const riffType = view.getUint32(offset + 0, true);
                offset += 4;

                let chunks: ReadChunkType[keyof ReadChunkType][] = [];

                while(offset < view.byteLength) {
                    const chunk = readChunk(offset);
                    offset += 8 + chunk.length;
                    offset += offset % 2;
                    chunks.push(chunk);
                }

                return {
                    type, length,
                    riffType, chunks
                }

                break; }
            case RIFF_WEBP_FOURCC.VP8X: {

                if(length != 10) {
                    throw new Error('extractImageDataChunkFromWEBP: VP8X chunk must be length 10.');
                }

                return {
                    type, length,
                    flags: view.getUint32(offset + 0, true),
                    width: getUint24(offset + 4, true) + 1,
                    height: getUint24(offset + 7, true) + 1
                }
                
                break; }
            case RIFF_WEBP_FOURCC.VP8:
            case RIFF_WEBP_FOURCC.VP8L: {

                return {
                    type, length,
                    // For these we want the chunk header.
                    data: view.buffer.slice(offset - 8, offset + length + 8)
                }

                break; }
            case RIFF_WEBP_FOURCC.ANIM: {

                if(length != 6) {
                    throw new Error('extractImageDataChunkFromWEBP: ANIM chunk must be length 6.');
                }

                return {
                    type, length,
                    backgroundColor: view.getUint32(offset + 0, true),
                    loopCount: view.getUint16(offset + 4, true),
                }

                break; }
            case RIFF_WEBP_FOURCC.ANMF: {

                return {
                    type, length,
                    x: getUint24(offset + 0, true) * 2,
                    y: getUint24(offset + 3, true) * 2,
                    width: getUint24(offset + 6, true) + 1,
                    height: getUint24(offset + 9, true) + 1,
                    duration: getUint24(offset + 12, true),
                    flags: view.getUint8(offset + 15),
                    // ( This is dumb. )
                    chunk: (function() {
                        const chunk = readChunk(offset + 16);
                        offset += offset % 2;
                        return chunk;
                    })()
                }

                break; }
            default: {

                return {
                    type, length,
                    data: view.buffer.slice(offset, offset + length)
                }

                break; }
        }

    }



    const riff = readChunk(0);

    if(riff.type != RIFF_WEBP_FOURCC.RIFF) {
        throw new Error('extractImageDataChunkFromWEBP: Data is not RIFF.');
    }
    if(riff.riffType != RIFF_WEBP_FOURCC.WEBP) {
        throw new Error('extractImageDataChunkFromWEBP: RIFF is not WEBP.');
    }

    let width;
    let height;
    let webpdata;

    for(const chunk of riff.chunks) {
        if(chunk.type == RIFF_WEBP_FOURCC.VP8X) {
            width = chunk.width;
            height = chunk.height;
        } else if(chunk.type == RIFF_WEBP_FOURCC.VP8 || chunk.type == RIFF_WEBP_FOURCC.VP8L) {
            webpdata = chunk.data;
        } else if(chunk.type == RIFF_WEBP_FOURCC.ANMF) {
            const subChunk = chunk.chunk;
            if(subChunk.type == RIFF_WEBP_FOURCC.VP8 || subChunk.type == RIFF_WEBP_FOURCC.VP8L) {
                webpdata = subChunk.data;
            }
        }
    }

    if(width === undefined || height === undefined || webpdata === undefined) {
        throw new Error('extractImageDataChunkFromWEBP: Could not find webp image data.');
    }

    return { data: webpdata, width, height };

}





namespace Base64 {

    export function encode(buffer: ArrayBuffer): string {
        return btoa(
            new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
    }
    
    export function decode(data: string): ArrayBuffer {
        return Uint8Array.from(atob(data), c => c.charCodeAt(0)).buffer;
    }

}





function isImageLoaded(img: HTMLImageElement): boolean {
    if(!img.complete) return false;
    if(img.naturalWidth === 0) return false;
    return true;
}

export function awaitImageLoad(img: HTMLImageElement): Promise<HTMLImageElement> {

    return new Promise((resolve, reject) => {

        if(isImageLoaded(img)) {
            return resolve(img);
        }

        // TODO: Don't do this.
        // Remove other event listener once one is complete.
        img.addEventListener('load', () => resolve(img), { once: true });
        img.addEventListener('error', () => reject(img), { once: true });

    });

}



type ImageToWebpOptions = {
    /**
     * 0..=1  
     * @default 1  
     */
    quality?: number;
}



type SuppliableImageType = HTMLCanvasElement | ImageData | HTMLImageElement;



/**
 * Image to WEBP.  
 * @param img - If supplying HTMLImageElement, Be sure it's loaded.  
 */
export function ImageToWebp(img: SuppliableImageType, options: ImageToWebpOptions = {}): ArrayBuffer {

    options.quality ??= 1;

    let data: string | undefined = undefined;



    if(img instanceof HTMLCanvasElement) {

        data = img.toDataURL('image/webp', options.quality);

    } else if(img instanceof ImageData) {

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if(ctx === null) {
            throw new Error("ImageToWebp: Canvas context 2d not supported on browser or machine.");
        }

        ctx.putImageData(img, 0, 0);

        data = canvas.toDataURL('image/webp', options.quality);

    } else if(img instanceof HTMLImageElement) {

        if(!isImageLoaded(img)) {
            throw new Error("ImageToWebp: Image is not loaded.");
        }

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if(ctx === null) {
            throw new Error("ImageToWebp: Canvas context 2d not supported on browser or machine.");
        }

        ctx.drawImage(img, 0, 0);

        data = canvas.toDataURL('image/webp', options.quality);

    } else {

        throw new Error('ImageToWebp: Invalid image type.');

    }



    // First 23 bytes are mime identifier & other.
    data = data.slice(23);

    return Base64.decode(data);
}





type WebpAnimationBuilderOptions = {
    /**
     * The frame duration of every frame unless overridden.  
     * If this is not set and calling .addFrame with no frame duration, It will throw an error.  
     * @default undefined  
     */
    defaultFrameDurationMs?: number;
    /**
     * 0..=1  
     * The default quality of every frame unless overridden.  
     * @default 1  
     */
    defaultQuality?: number;
    /**
     * Width of output canvas.  
     * If this is not set it will take the width of the first frame.  
     */
    canvasWidth?: number;
    /**
     * Height of output canvas.  
     * If this is not set it will take the height of the first frame.  
     */
    canvasHeight?: number;
}

type WebpAnimationFrameOptions = {
    /**
     * MUST be set if the builder's defaultFrameDurationMs is not set.  
     */
    frameDuration?: number;
    /**
     * 0..=1  
     * @default 1  
     */
    quality?: number;
    /**
     * X position on output canvas.
     * @default 0  
     */
    x?: number;
    /**
     * Y position on output canvas.
     * @default 0  
     */
    y?: number;
}

type AnimationFrame = {
    image: {
        data: ArrayBuffer;
        width: number;
        height: number;
    }
    duration: number;
    x: number;
    y: number;
}

export class WebpAnimationBuilder {

    defaultFrameDurationMs: number | undefined;
    defaultQuality: number;
    canvasWidth?: number;
    canvasHeight?: number;

    constructor(options: WebpAnimationBuilderOptions = {}) {
        this.defaultFrameDurationMs = options.defaultFrameDurationMs;
        this.defaultQuality = options.defaultQuality ?? 1;
        this.canvasWidth = options.canvasWidth;
        this.canvasHeight = options.canvasHeight;
    }




    frames: AnimationFrame[] = [];



    /**
     * Add a frame to the animation.  
     * @param img - If supplying HTMLImageElement, Be sure it's loaded.  
     */
    public addFrame(img: SuppliableImageType, options: WebpAnimationFrameOptions = {}): void {

        const frameDuration = options.frameDuration ?? this.defaultFrameDurationMs;
        if(frameDuration === undefined) {
            throw new Error('WebpAnimationBuilder.addFrame: Did not specify a frame duration.');
        }
        const quality = options.quality ?? this.defaultQuality;

        const webp = ImageToWebp(img, { quality });

        this.frames.push({
            image: extractImageDataChunkFromWEBP(webp),
            duration: frameDuration,
            x: options.x ?? 0,
            y: options.y ?? 0
        });
        
    }



    /**
     * Will always overshoot the actual size.  
     */
    private estimateOutputSize(): number {
        return this.frames.reduce((length, frame) => {
            return length + frame.image.data.byteLength + 24;
        }, 0) + 128;
    }



    /**
     * Generate final animation.  
     */
    public generateAnimation(): ArrayBuffer {

        if(this.frames.length == 0) {
            throw new Error('WebpAnimationBuilder.generateAnimations: Builder has no frames.');
        }

        const canvasWidth = this.canvasWidth ?? this.frames[0].image.width;
        const canvasHeight = this.canvasHeight ?? this.frames[0].image.height;



        let view = new DataView(new ArrayBuffer(
            this.estimateOutputSize()
        ));
        let pointer = 0;
        const setUint24 = (offset: number, value: number, littleEndian: boolean = false) => {
            if(littleEndian === false) {
                throw new Error('Catastrophic error.');
            }
            value = ~~value;
            view.setUint8(offset + 0, value >> 0);
            view.setUint16(offset + 1, value >> 8, true);
        }


        // RIFF HEADER
        view.setUint32(0, RIFF_WEBP_FOURCC.RIFF, true);
        const setRiffTotalSize = (size: number) => view.setUint32(4, size, true);
        view.setUint32(8, RIFF_WEBP_FOURCC.WEBP, true);

        // IMAGE INFO
        view.setUint32(12, RIFF_WEBP_FOURCC.VP8X, true);
        view.setUint32(16, 10, true); // VP8X chunk size is fixed
        view.setUint32(20, 0b000000000000000000010010, true); // Flags
        setUint24(24, canvasWidth - 1, true);
        setUint24(27, canvasHeight - 1, true);

        // ANIMATION INFO
        view.setUint32(30, RIFF_WEBP_FOURCC.ANIM, true);
        view.setUint32(34, 6, true); // ANIM chunk size is fixed
        view.setUint32(38, 0x00000000, true); // Background color
        view.setUint16(42, 0, true); // Loop count

        pointer = 44;

        // ANIMATION FRAMES
        for(const frame of this.frames) {

            if(frame.x < 0 || frame.x + frame.image.width > canvasWidth || frame.y < 0 || frame.y + frame.image.height > canvasHeight) {
                throw new Error('WebpAnimationBuilder.generateAnimation: Frame is outside of builder canvas!');
            }

            const start = pointer;

            // ANIM
            view.setUint32(pointer + 0, RIFF_WEBP_FOURCC.ANMF, true);
            const animFrameSizeOffset = pointer + 4;
            const setFrameTotalSize = (size: number) => view.setUint32(animFrameSizeOffset, size, true);
            setUint24(pointer + 8, frame.x / 2, true); // X
            setUint24(pointer + 11, frame.y / 2, true); // Y
            setUint24(pointer + 14, frame.image.width - 1, true); // Width
            setUint24(pointer + 17, frame.image.height - 1, true); // Height
            setUint24(pointer + 20, frame.duration, true); // Frame duration ms
            view.setUint8(pointer + 23, 0b00000011); // Flags

            // VP8(X) chunk
            pointer += 24;
            new Uint8Array(view.buffer).set(new Uint8Array(frame.image.data), pointer);
            pointer += frame.image.data.byteLength;

            // Even padding
            pointer += pointer % 2;

            const end = pointer;
            setFrameTotalSize(end - start - 8);

        }


        setRiffTotalSize(pointer - 8);


        return view.buffer.slice(0, pointer);

    }

    public generateAnimationURL(): string {
        const buffer = this.generateAnimation();
        let str = `data:image/webp;base64,${Base64.encode(buffer)}`;
        return str;
    }

}

