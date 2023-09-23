/*

    BC Texture Compression:
        https://learn.microsoft.com/en-us/windows/win32/direct3d9/compressed-texture-resources

    Valve Texture Format specifications:
        https://developer.valvesoftware.com/wiki/VTF_(Valve_Texture_Format)

*/

import { DataReader } from "$lib/DataReader";
import { NumberUtils } from "$lib/NumberUtils";
import { Utils } from "$lib/Utils";
import * as THREE from 'three';



type Color = { r: number, g: number, b: number, a: number };

function decode565(value: number): Color {
    return {
        r: (value & 0b1111100000000000) >> 8,
        g: (value & 0b0000011111100000) >> 3,
        b: (value & 0b0000000000011111) << 3,
        a: 255
    }
}

function lerpColor(a: Color, b: Color, t: number): Color {
    return {
        r: NumberUtils.lerp(a.r, b.r, t),
        g: NumberUtils.lerp(a.g, b.g, t),
        b: NumberUtils.lerp(a.b, b.b, t),
        a: 255,
    }
}



function BC_BlockDecoder(data: Uint8Array, width: number, height: number, blockSize: 8 | 16, callbackfn: (block: Uint8Array) => Uint8ClampedArray): ImageData {

    const img = new ImageData(width, height);

    const blockWidth = Math.ceil(width / 4);
    const blockHeight = Math.ceil(height / 4);

    for(let bx = 0; bx < blockWidth; bx++) {
        for(let by = 0; by < blockHeight; by++) {

            // Get the encoded block.
            const blockOffset = (bx + by * blockWidth) * blockSize;
            // const slice = new Uint8Array(data, blockOffset, blockSize);
            const slice = data.slice(blockOffset, blockOffset + blockSize);

            // Decode the block.
            const rgba = callbackfn(slice);

            // Write decoded block to the image data.
            for(let dx = 0; dx < 4; dx++) {
                for(let dy = 0; dy < 4; dy++) {
                    const x = bx * 4 + dx;
                    const y = by * 4 + dy;
                    if(x >= width || y >= height) continue;
                    const ii = (x + y * width) * 4;
                    const bi = (dx + dy * 4) * 4;
                    img.data[ii + 0] = rgba[bi + 0];
                    img.data[ii + 1] = rgba[bi + 1];
                    img.data[ii + 2] = rgba[bi + 2];
                    img.data[ii + 3] = rgba[bi + 3];
                }
            }

        }
    }

    return img;

}

function BC1_Decode(data: Uint8Array, width: number, height: number, isTransparent: boolean): ImageData {
    return BC_BlockDecoder(data, width, height, 8, block => {

        const colorValue1 = block[0] | (block[1] << 8);
        const colorValue2 = block[2] | (block[3] << 8);
        const color1 = decode565(colorValue1);
        const color2 = decode565(colorValue2);

        const palette = colorValue1 > colorValue2 ? [
            color1, color2,
            lerpColor(color1, color2, 1 / 3),
            lerpColor(color1, color2, 2 / 3)
        ] : [
            color1, color2,
            lerpColor(color1, color2, 1 / 2),
            { r: 0, g: 0, b: 0, a: isTransparent ? 0 : 255 }
        ];

        const rgba = new Uint8ClampedArray(4 * 4 * 4);

        for(let i = 0; i < 16; i++) {
            const p = (block[4 + (i >> 2)] >> ((i & 0b11) << 1)) & 0b11;
            const col = palette[p];

            rgba[i*4 + 0] = col.r;
            rgba[i*4 + 1] = col.g;
            rgba[i*4 + 2] = col.b;
            rgba[i*4 + 3] = col.a;
        }

        return rgba;

    });
}

function BC2_BC3_Decode(data: Uint8Array, width: number, height: number, isBC2: boolean): ImageData {
    return BC_BlockDecoder(data, width, height, 16, block => {

        const rgba = new Uint8ClampedArray(4 * 4 * 4);

        // Decode alpha.

        if(isBC2) {

            // I'm so very sorry.
            for(let i = 0; i < 16; i++) {
                rgba[i*4 + 3] = (((block[i >> 1]) >> ((i & 1) << 2)) & 15) << 4;
            }

        } else {

            const alpha0 = block[0];
            const alpha1 = block[1];
            const alphas = (alpha0 > alpha1 ? [
                alpha0, alpha1,
                NumberUtils.lerp(alpha0, alpha1, 1 / 7),
                NumberUtils.lerp(alpha0, alpha1, 2 / 7),
                NumberUtils.lerp(alpha0, alpha1, 3 / 7),
                NumberUtils.lerp(alpha0, alpha1, 4 / 7),
                NumberUtils.lerp(alpha0, alpha1, 5 / 7),
                NumberUtils.lerp(alpha0, alpha1, 6 / 7),
            ] : [
                alpha0, alpha1,
                NumberUtils.lerp(alpha0, alpha1, 1 / 5),
                NumberUtils.lerp(alpha0, alpha1, 2 / 5),
                NumberUtils.lerp(alpha0, alpha1, 3 / 5),
                NumberUtils.lerp(alpha0, alpha1, 4 / 5),
                0, 255
            ]);

            // I'm even more sorry.
            let dw: number = block[2] | (block[3] << 8) | (block[4] << 16);
            for(let i = 0; i < 8; i++, dw >>= 3) {
                rgba[i*4 + 3] = alphas[dw & 0b111];
            }
            dw = block[5] | (block[6] << 8) | (block[7] << 16);
            for(let i = 8; i < 16; i++, dw >>= 3) {
                rgba[i*4 + 3] = alphas[dw & 0b111];
            }
            
        }

        // Decode color.
        const colorValue1 = block[8] | (block[9] << 8);
        const colorValue2 = block[10] | (block[11] << 8);
        const color1 = decode565(colorValue1);
        const color2 = decode565(colorValue2);

        const palette = colorValue1 > colorValue2 ? [
            color1, color2,
            lerpColor(color1, color2, 1 / 3),
            lerpColor(color1, color2, 2 / 3)
        ] : [
            color1, color2,
            lerpColor(color1, color2, 1 / 2),
            { r: 0, g: 0, b: 0 }
        ];


        for(let i = 0; i < 16; i++) {
            const p = (block[12 + (i >> 2)] >> ((i & 0b11) << 1)) & 0b11;
            const col = palette[p];

            rgba[i*4 + 0] = col.r;
            rgba[i*4 + 1] = col.g;
            rgba[i*4 + 2] = col.b;
        }

        return rgba;

    });
}



class VTF_Texture {

    readonly format: VTF_Format;

    readonly width: number;
    readonly height: number;

    readonly data: Uint8Array;

    constructor(format: VTF_Format, width: number, height: number, data: Utils.DataBuffer) {
        this.format = format;
        this.width = width;
        this.height = height;
        this.data = new Uint8Array(data);
    }

    static getTextureSize(format: VTF_Format, width: number, height: number): number {

        function bcNearestSize(size: number): number {
            // if(size < 4) return 4;
            return Math.ceil(size / 4) * 4;
        }

        switch(format) {
            case VTF_Format.NONE:
                return 0;
            case VTF_Format.DXT1:
            case VTF_Format.DXT1_ONEBITALPHA:
                return (bcNearestSize(width) * bcNearestSize(height)) / 2;
            case VTF_Format.DXT3:
            case VTF_Format.DXT5:
                return bcNearestSize(width) * bcNearestSize(height);
            case VTF_Format.A8:
            case VTF_Format.I8:
            case VTF_Format.P8:
                return width * height;
            case VTF_Format.BGR565:
            case VTF_Format.BGRX5551:
            case VTF_Format.BGRA4444:
            case VTF_Format.BGRA5551:
            case VTF_Format.IA88:
            case VTF_Format.RGB565:
            case VTF_Format.UV88:
                return width * height * 2;
            case VTF_Format.BGR888:
            case VTF_Format.BGR888_BLUESCREEN:
            case VTF_Format.RGB888:
            case VTF_Format.RGB888_BLUESCREEN:
                return width * height * 3;
            case VTF_Format.ABGR8888:
            case VTF_Format.ARGB8888:
            case VTF_Format.BGRA8888:
            case VTF_Format.BGRX8888:
            case VTF_Format.RGBA8888:
            case VTF_Format.UVLX8888:
            case VTF_Format.UVWQ8888:
                return width * height * 4;
            case VTF_Format.RGBA16161616:
            case VTF_Format.RGBA16161616F:
                return width * height * 8;
            default:
                throw new Error(`Unknown texture format. ${format}`);
        }

    }

    getImageData(): ImageData {

        switch(this.format) {

            case VTF_Format.RGBA8888:
                return new ImageData(new Uint8ClampedArray(this.data), this.width, this.height);
                
            case VTF_Format.ABGR8888: {
                const img = new ImageData(this.width, this.height);
                for(let i = 0; i < this.width * this.height; i++) {
                    img.data[i*4+0] = this.data[i*4+3];
                    img.data[i*4+1] = this.data[i*4+2];
                    img.data[i*4+2] = this.data[i*4+1];
                    img.data[i*4+3] = this.data[i*4+0];
                }
                return img; }

            case VTF_Format.RGB888: {
                const img = new ImageData(this.width, this.height);
                for(let i = 0; i < this.width * this.height; i++) {
                    img.data[i*4+0] = this.data[i*3+0];
                    img.data[i*4+1] = this.data[i*3+1];
                    img.data[i*4+2] = this.data[i*3+2];
                    img.data[i*4+3] = 255;
                }
                return img; }

            case VTF_Format.BGR888: {
                const img = new ImageData(this.width, this.height);
                for(let i = 0; i < this.width * this.height; i++) {
                    img.data[i*4+0] = this.data[i*3+3];
                    img.data[i*4+1] = this.data[i*3+2];
                    img.data[i*4+2] = this.data[i*3+1];
                    img.data[i*4+3] = 255;
                }
                return img; }

            case VTF_Format.RGB565: {
                const data16 = new Uint16Array(this.data.buffer);
                const img = new ImageData(this.width, this.height);
                for(let i = 0; i < this.width * this.height; i++) {
                    const color = decode565(data16[i]);
                    img.data[i*4+0] = color.r;
                    img.data[i*4+1] = color.g;
                    img.data[i*4+2] = color.b;
                    img.data[i*4+3] = 255;
                }
                return img; }

            case VTF_Format.I8: {
                const img = new ImageData(this.width, this.height);
                for(let i = 0; i < this.width * this.height; i++) {
                    img.data[i*4+0] = this.data[i];
                    img.data[i*4+1] = this.data[i];
                    img.data[i*4+2] = this.data[i];
                    img.data[i*4+3] = 255;
                }
                return img; }

            case VTF_Format.BGRA8888: {
                const img = new ImageData(this.width, this.height);
                for(let i = 0; i < this.width * this.height; i++) {
                    img.data[i*4+0] = this.data[i*4+2];
                    img.data[i*4+1] = this.data[i*4+1];
                    img.data[i*4+2] = this.data[i*4+0];
                    img.data[i*4+3] = this.data[i*4+3];
                }
                return img; }

            case VTF_Format.DXT1: // This is always transparent?
            case VTF_Format.DXT1_ONEBITALPHA:
                return BC1_Decode(this.data, this.width, this.height, true)

            case VTF_Format.DXT3:
                return BC2_BC3_Decode(this.data, this.width, this.height, true);

            case VTF_Format.DXT5:
                return BC2_BC3_Decode(this.data, this.width, this.height, false);
            
            case VTF_Format.BGRA5551: {
                const data16 = new Uint16Array(this.data.buffer);
                const img = new ImageData(this.width, this.height);
                for(let i = 0; i < this.width * this.height; i++) {
                    const value = data16[i];
                    img.data[i*4+0] = (value & 0b01111100_00000000) >> 7;
                    img.data[i*4+1] = (value & 0b00000011_11100000) >> 2;
                    img.data[i*4+2] = (value & 0b00000000_00011111) << 3;
                    img.data[i*4+3] = (value & 0b10000000_00000000) ? 255 : 0;
                }
                return img; }

            default:
                throw new Error(`Unknown texture format. ${this.format}`);
            
        }

    }

}



export enum VTF_Format {
    NONE = -1,
	RGBA8888 = 0,
	ABGR8888 = 1,
	RGB888 = 2,
	BGR888 = 3,
	RGB565 = 4,
	I8 = 5,
	IA88 = 6,
	P8 = 7,
	A8 = 8,
	RGB888_BLUESCREEN = 9,
	BGR888_BLUESCREEN = 10,
	ARGB8888 = 11,
	BGRA8888 = 12,
	DXT1 = 13,
	DXT3 = 14,
	DXT5 = 15,
	BGRX8888 = 16,
	BGR565 = 17,
	BGRX5551 = 18,
	BGRA4444 = 19,
	DXT1_ONEBITALPHA = 20,
	BGRA5551 = 21,
	UV88 = 22,
	UVWQ8888 = 23,
	RGBA16161616F = 24,
	RGBA16161616 = 25,
	UVLX8888 = 26
}



export enum VTF_Flags {
	POINTSAMPLE = 0x00000001,
	TRILINEAR = 0x00000002,
	CLAMPS = 0x00000004,
	CLAMPT = 0x00000008,
	ANISOTROPIC = 0x00000010,
	HINT_DXT5 = 0x00000020,
	PWL_CORRECTED = 0x00000040,
	NORMAL = 0x00000080,
	NOMIP = 0x00000100,
	NOLOD = 0x00000200,
	ALL_MIPS = 0x00000400,
	PROCEDURAL = 0x00000800,

	ONEBITALPHA = 0x00001000,
	EIGHTBITALPHA = 0x00002000,

	ENVMAP = 0x00004000,
	RENDERTARGET = 0x00008000,
	DEPTHRENDERTARGET = 0x00010000,
	NODEBUGOVERRIDE = 0x00020000,
	SINGLECOPY	= 0x00040000,
	PRE_SRGB = 0x00080000,
        
    UNUSED_00100000 = 0x00100000,
	UNUSED_00200000 = 0x00200000,
	UNUSED_00400000 = 0x00400000,

	NODEPTHBUFFER = 0x00800000,

	UNUSED_01000000 = 0x01000000,

	CLAMPU = 0x02000000,
	VERTEXTEXTURE = 0x04000000,
	SSBUMP = 0x08000000,			

	UNUSED_10000000 = 0x10000000,

	BORDER = 0x20000000,

	UNUSED_40000000 = 0x40000000,
	UNUSED_80000000 = 0x80000000,
}



enum VTF_Resource {
    LowRes = '\x01\0\0',
    HighRes = '\x30\0\0',
    AnimParticleSheet = '\x10\0\0',
    CRC = 'CRC',
    LodControl = 'LOD',
    ExtendedFlags = 'TSO',
    KeyValueData = 'KVD'
}



class VTF_Reader extends DataReader {

    readHeaderHead() {
        this.assertMagic('VTF\0');

        const versionMajor = this.readNumber('Uint32');
        const versionMinor = this.readNumber('Uint32');

        return {
            version: parseFloat(`${versionMajor}.${versionMinor}`),
            headerSize: this.readNumber('Uint32')
        }
    }

    readResource() {
        return {
            tag: this.readString(3, 'ascii'),
            flags: this.readNumber('Uint8'),
            offset: this.readNumber('Uint32')
        }
    }

    readHeader(version: number) {
        
        const width = this.readNumber('Uint16');
        const height = this.readNumber('Uint16');
        
        const flags = this.readNumber('Uint32');

        const frames = this.readNumber('Uint16');
        const firstFrame = this.readNumber('Int16');

        this.pointer += 4;

        const reflectivity = {
            r: this.readNumber('Float32'),
            g: this.readNumber('Float32'),
            b: this.readNumber('Float32')
        }

        this.pointer += 4;

        const bumpmapScale = this.readNumber('Float32');

        const format = this.readNumber('Int32');

        const mipmaps = this.readNumber('Uint8');

        const lowresFormat = this.readNumber('Int32');
        const lowresWidth = this.readNumber('Uint8');
        const lowresHeight = this.readNumber('Uint8');

        const faces = (flags & VTF_Flags.ENVMAP) ? (firstFrame == -1 ? 7 : 6) : 1;

        const slices = (version >= 7.2) ? this.readNumber('Uint16') : 1;

        let resourceFormat: boolean = false;
        let resources: { tag: string, flags: number, offset: number }[] = [];

        if(version >= 7.3) {

            this.pointer += 3;

            resourceFormat = true;
            const numResources = this.readNumber('Uint32');

            this.pointer += 8;

            resources = this.readArray(this.readResource, numResources);

        }



        return { width, height, flags, frames, firstFrame, reflectivity, bumpmapScale, format, mipmaps, lowresFormat, lowresWidth, lowresHeight, faces, slices, resourceFormat, resources };

    }

    readTexture(format: VTF_Format, width: number, height: number): VTF_Texture {
        const texData = this.readBuffer(VTF_Texture.getTextureSize(format, width, height));
        const tex = new VTF_Texture(format, width, height, texData);
        return tex;
    }

}



function getMipSize(width: number, height: number, mipmap: number): [ number, number ] {
    return [
        width >> mipmap,
        height >> mipmap
    ];
}



export class VTF {

    readonly version: number;

    readonly format: VTF_Format;

    readonly width: number;
    readonly height: number;

    readonly mipmaps: number;
    readonly frames: number;
    readonly faces: number;
    readonly slices: number = 1;

    readonly textures: VTF_Texture[][][][];

    readonly firstFrame: number;

    readonly flags: VTF_Flags;

    readonly reflectivity: { r: number, g: number, b: number };

    readonly bumpmapScale: number;

    readonly lowresFormat: VTF_Format;
    readonly lowresWidth: number;
    readonly lowresHeight: number;

    readonly lowresTexture: VTF_Texture | null = null;

    constructor(buffer: ArrayBuffer) {

        const reader = new VTF_Reader(buffer);

        const headerHead = reader.readHeaderHead();

        this.version = headerHead.version;

        const header = reader.readHeader(this.version);

        this.width = header.width;
        this.height = header.height;
        this.flags = header.flags;
        this.frames = header.frames;
        this.firstFrame = header.firstFrame;
        this.reflectivity = header.reflectivity;
        this.bumpmapScale = header.bumpmapScale;
        this.format = header.format;
        this.mipmaps = header.mipmaps;
        this.lowresFormat = header.lowresFormat;
        this.lowresWidth = header.lowresWidth;
        this.lowresHeight = header.lowresHeight;
        this.faces = header.faces;
        this.slices = header.slices;



        const readTextures = (): VTF_Texture[][][][] => {
            
            let textures: VTF_Texture[][][][] = [];

            for(let mipmap = this.mipmaps - 1; mipmap >= 0; mipmap--) {
                textures[mipmap] = [];
                for(let frame = 0; frame < this.frames; frame++) {
                    textures[mipmap][frame] = [];
                    for(let face = 0; face < this.faces; face++) {
                        textures[mipmap][frame][face] = [];
                        for(let slice = 0; slice < this.slices; slice++) {

                            const [ width, height ] = this.getSize(mipmap);
                            const tex = reader.readTexture(this.format, width, height);

                            textures[mipmap][frame][face][slice] = tex;

                        }
                    }
                }
            }

            return textures;

        }

        const readLowresTexture = (): VTF_Texture | null => {

            if(this.lowresWidth == 0 || this.lowresHeight == 0 || this.lowresFormat == VTF_Format.NONE) return null;

            if(this.lowresFormat != VTF_Format.DXT1) {
                console.warn(`VTF lowres texture format ${VTF_Format[this.lowresFormat]} is not ${VTF_Format[VTF_Format.DXT1]}`);
            }

            const tex = reader.readTexture(this.lowresFormat, this.lowresWidth, this.lowresHeight);

            return tex;

        }


        
        // Read textures.

        if(header.resourceFormat) {

            const res_highres = header.resources.find(res => res.tag == VTF_Resource.HighRes);

            if(!res_highres) {
                throw new Error('VTF resource format has no high resolution texture.');
            }

            reader.pointer = res_highres.offset;
            this.textures = readTextures();


            const res_lowres = header.resources.find(res => res.tag == VTF_Resource.LowRes);

            if(res_lowres) {

                reader.pointer = res_lowres.offset;
                this.lowresTexture = readLowresTexture();

            }

        } else {

            reader.pointer = headerHead.headerSize;

            this.lowresTexture = readLowresTexture();

            this.textures = readTextures();

        }

    }

    getSize(mipmap: number): [ number, number ] {
        return getMipSize(this.width, this.height, mipmap);
    }

    getTexture(mipmap: number = 0, frame: number = 0, face: number = 0, slice: number = 0): VTF_Texture {
        return this.textures[mipmap][frame][face][slice];
    }

    static async getThumbnail(blob: Blob, minWidth: number, minHeight: number): Promise<VTF_Texture | null> {
        // TODO: Clean this shit up.
        const reader = new VTF_Reader();

        reader.loadData(await blob.slice(0, 16).arrayBuffer());
        const headerHead = reader.readHeaderHead();

        reader.loadData(await blob.slice(0, headerHead.headerSize).arrayBuffer(), reader.pointer);
        const header = reader.readHeader(headerHead.version);

        let offset = (header.resourceFormat ? (header.resources.find(res => res.tag == VTF_Resource.HighRes)?.offset ?? -1) : (headerHead.headerSize + VTF_Texture.getTextureSize(header.lowresFormat, header.lowresWidth, header.lowresHeight)))

        if(offset == -1) {
            throw new Error('VTF no highres texture.');
        }

        // Go through each texture, find the one that fits the requirements.
        for(let mipmap = header.mipmaps - 1; mipmap >= 0; mipmap--) {
            for(let frame = 0; frame < header.frames; frame++) {
                for(let face = 0; face < header.faces; face++) {
                    for(let slice = 0; slice < header.slices; slice++) {

                        const [ width, height ] = getMipSize(header.width, header.height, mipmap);
                        const size = VTF_Texture.getTextureSize(header.format, width, height);
                        if(width < minWidth || height < minHeight) {
                            offset += size;
                            continue;
                        }

                        reader.loadData(await blob.slice(offset, offset + size).arrayBuffer());
                        const tex = reader.readTexture(header.format, width, height);

                        return tex;

                    }
                }
            }
        }

        return null;

    }



    getTHREEMipmaps(frame: number = 0): { data: Uint8Array, width: number, height: number }[] {
        return Utils.initArray(this.mipmaps, mipmap => {
            const size = this.getSize(mipmap);
            return {
                data: new Uint8Array(this.getTexture(mipmap, frame).data),
                width: size[0],
                height: size[1]
            }
        }).filter(mipmap => {
            return (mipmap.width > 0 && mipmap.height > 0);
        });
    }

    getTHREETexture(): THREE.Texture {

        let texture: THREE.CompressedTexture | THREE.DataTexture;

        if([
            VTF_Format.DXT1,
            VTF_Format.DXT1_ONEBITALPHA,
            VTF_Format.DXT3,
            VTF_Format.DXT5
        ].includes(this.format)) {

            texture = new THREE.CompressedTexture(
                // @ts-ignore - The types of three are messed up here, this does in fact work.
                this.getTHREEMipmaps(),
                this.width,
                this.height,
                THREEFormatMap[this.format] as THREE.CompressedPixelFormat
            );

        } else {

            if(THREEFormatMap[this.format] === undefined) {
                // TODO: Convert texture format to RGBA if there is no three format.
                throw new Error('Cannot convert texture format.');
            }

            texture = new THREE.DataTexture(
                undefined,
                this.width,
                this.height,
                THREEFormatMap[this.format] as THREE.PixelFormat
            );

            texture.mipmaps = this.getTHREEMipmaps();

        }

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.generateMipmaps = false; // Mipmaps are already generated.
        texture.magFilter = THREE.LinearFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;

        texture.needsUpdate = true;

        return texture;

    }

}



const THREEFormatMap: {[key: number]: number} = {
    [VTF_Format.DXT1]: THREE.RGB_S3TC_DXT1_Format,
    [VTF_Format.DXT1_ONEBITALPHA]: THREE.RGBA_S3TC_DXT1_Format,
    [VTF_Format.DXT3]: THREE.RGBA_S3TC_DXT3_Format,
    [VTF_Format.DXT5]: THREE.RGBA_S3TC_DXT5_Format,
    [VTF_Format.RGBA8888]: THREE.RGBAFormat,
    [VTF_Format.BGRA8888]: THREE.RGBAFormat
};


