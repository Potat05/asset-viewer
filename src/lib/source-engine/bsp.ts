
import { BlobReader } from "$lib/BlobReader";
import type { fsDirectory } from "$lib/FileSystem";
import { decodeLZMAProperties, decompress } from "$lib/codecs/lzma";
import { readZip } from "$lib/zip";
import * as THREE from "three";





function decompressLZMA(compressedData: ArrayBuffer, uncompressedSize: number): ArrayBuffer {
    const compressedView = new DataView(compressedData);

    // Parse Valve's lzma_header_t.
    const actualSize = compressedView.getUint32(0x04, true);
    if(actualSize != uncompressedSize) {
        throw new Error('BSP decompressing lzma size does not match.');
    }
    const lzmaSize = compressedView.getUint32(0x08, true);
    if(lzmaSize + 0x11 > compressedData.byteLength) {
        throw new Error('BSP decompressing lzma size does not match.');
    }

    const lzmaProperties = decodeLZMAProperties(compressedData.slice(0x0C));
    const uncompressed = decompress(compressedData.slice(0x11), lzmaProperties, actualSize);

    if(actualSize != uncompressed.byteLength) {
        throw new Error('BSP decompressing lzma size does not match.');
    }

    return uncompressed;
}





type LumpDirEntry = {
    offset: number;
    length: number;
    version: number;
    uncompressedLength: number;
}

enum Lump {
    ENTITIES = 0,
    PLANES = 1,
    TEXDATA = 2,
    VERTEXES = 3,
    VISIBILITY = 4,
    NODES = 5,
    TEXINFO = 6,
    FACES = 7,
    LIGHTING = 8,
    OCCLUSION = 9,
    LEAFS = 10,
    FACEIDS = 11,
    EDGES = 12,
    SURFEDGES = 13,
    MODELS = 14,
    WORLDLIGHTS = 15,
    LEAFFACES = 16,
    LEAFBRUSHES = 17,
    BRUSHES = 18,
    BRUSHSIDES = 19,
    AREAS = 20,
    AREAPORTALS = 21,
    PORTALS = 22,
    UNUSED0 = 22,
    PROPCOLLISION = 22,
    CLUSTERS = 23,
    UNUSED1 = 23,
    PROPHULLS = 23,
    PORTALVERTS = 24,
    UNUSED2 = 24,
    PROPHULLVERTS = 24,
    CLUSTERPORTALS = 25,
    UNUSED3 = 25,
    PROPTRIS = 25,
    DISPINFO = 26,
    ORIGINALFACES = 27,
    PHYSDISP = 28,
    PHYSCOLLIDE = 29,
    VERTNORMALS = 30,
    VERTNORMALINDICES = 31,
    DISP_LIGHTMAP_ALPHAS = 32,
    DISP_VERTS = 33,
    DISP_LIGHTMAP_SAMPLE_POSITIONS = 34,
    GAME_LUMP = 35,
    LEAFWATERDATA = 36,
    PRIMITIVES = 37,
    PRIMVERTS = 38,
    PRIMINDICES = 39,
    PAKFILE = 40,
    CLIPPORTALVERTS = 41,
    CUBEMAPS = 42,
    TEXDATA_STRING_DATA = 43,
    TEXDATA_STRING_TABLE = 44,
    OVERLAYS = 45,
    LEAFMINDISTTOWATER = 46,
    FACE_MACRO_TEXTURE_INFO = 47,
    DISP_TRIS = 48,
    PHYSCOLLIDESURFACE = 49,
    PROP_BLOB = 49,
    WATEROVERLAYS = 50,
    LIGHTMAPPAGES = 51,
    LEAF_AMBIENT_INDEX_HDR = 51,
    LIGHTMAPPAGEINFOS = 52,
    LEAF_AMBIENT_INDEX = 52,
    LIGHTING_HDR = 53,
    WORLDLIGHTS_HDR = 54,
    LEAF_AMBIENT_LIGHTING_HDR = 55,
    LEAF_AMBIENT_LIGHTING = 56,
    XZIPPAKFILE = 57,
    FACES_HDR = 58,
    MAP_FLAGS = 59,
    OVERLAY_FADES = 60,
    OVERLAY_SYSTEM_LEVELS = 61,
    PHYSLEVEL = 62,
    DISP_MULTIBEND = 63
}



export class BSP extends BlobReader {

    constructor(blob: Blob) {
        super(blob);
    }



    /** The BSP file format version. */
    public version: number = -1;

    private lumpDirEntries: LumpDirEntry[] = [];

    /** The map revision. */
    public revision: number = -1;

    private readLumpDirEntry(): LumpDirEntry {
        return {
            offset: this.readNumber('Int32'),
            length: this.readNumber('Int32'),
            version: this.readNumber('Int32'),
            uncompressedLength: this.readNumber('Int32'),
        }
    }

    public async readHeader(): Promise<void> {

        await this.load(8 + 32 * 64 + 4);

        this.assertMagic('VBSP');

        this.version = this.readNumber('Uint32');

        this.lumpDirEntries = this.readArray(this.readLumpDirEntry, 64);

        this.revision = this.readNumber('Uint32');

    }

    public lumpExists(index: Lump): boolean {
        if(index < 0 || index >= 64) return false;
        const lump = this.lumpDirEntries[index];
        if(lump.length != 0) return true;
        if(lump.offset != 0) return true;
        return false;
    }

    public async getRawLumpBuffer(index: Lump): Promise<ArrayBuffer | null> {
        if(!this.lumpExists(index)) return null;

        const entry = this.lumpDirEntries[index];

        const buffer = await this.blob.slice(entry.offset, entry.offset + entry.length).arrayBuffer();

        if(entry.uncompressedLength === 0) {
            return buffer;
        }

        return decompressLZMA(buffer, entry.uncompressedLength);

    }

    public async getRawLumpBlob(index: Lump): Promise<Blob | null> {

        const entry = this.lumpDirEntries[index];
        if(!entry) return null;

        if(entry.length == 0 || entry.offset == 0) return null;

        const blob = this.blob.slice(entry.offset, entry.offset + entry.length);

        if(entry.uncompressedLength == 0) {
            return blob;
        }

        return new Blob([ decompressLZMA(await blob.arrayBuffer(), entry.uncompressedLength) ]);

    }

    public async loadLump(index: Lump): Promise<void> {
        const buffer = await this.getRawLumpBuffer(index);
        this.loadData(buffer ?? new ArrayBuffer(0));
    }

    public async getPakFile(name: string, parent: fsDirectory | null): Promise<fsDirectory | null> {

        const archiveBlob = await this.getRawLumpBlob(Lump.PAKFILE);

        if(archiveBlob == null) return null;

        const zip = await readZip(archiveBlob, name, parent, true);

        return zip;

    }

    private readVector(): THREE.Vector3 {
        return new THREE.Vector3(
            this.readNumber('Float32'),
            this.readNumber('Float32'),
            this.readNumber('Float32')
        );
    }



    public async getVertices() {
        await this.loadLump(Lump.VERTEXES);
        return this.readArrayUntilEnd(this.readVector);
    }

    public async getEdges() {
        await this.loadLump(Lump.EDGES);
        return this.readArrayUntilEnd(() => {
            return [ this.readNumber('Uint16'), this.readNumber('Uint16') ];
        });
    }

    public async getSurfEdges() {
        await this.loadLump(Lump.SURFEDGES);
        return this.readArrayUntilEnd(this.readNumber, 'Int32');
    }

    public async getFaces() {
        await this.loadLump(Lump.FACES);
        return this.readArrayUntilEnd(() => {
            return {
                planeNum: this.readNumber('Uint16'),
                side: this.readNumber('Uint8'),
                onNode: this.readNumber('Uint8') == 1,
                firstEdge: this.readNumber('Uint32'),
                numEdges: this.readNumber('Uint16'),
                texInfo: this.readNumber('Uint16'),
                dispInfo: this.readNumber('Int16'),
                surfaceFogVolumeID: this.readNumber('Uint16'),
                styles: [ this.readNumber('Uint8'), this.readNumber('Uint8'), this.readNumber('Uint8'), this.readNumber('Uint8') ],
                lightOffsets: this.readNumber('Uint32'),
                area: this.readNumber('Float32'),
                lightmapTextureMins: [ this.readNumber('Int32'), this.readNumber('Int32') ],
                lightmapTextureSize: [ this.readNumber('Int32'), this.readNumber('Int32') ],
                originalFace: this.readNumber('Uint32'),
                numPrimitives: this.readNumber('Uint16'),
                firstPrimitiveID: this.readNumber('Uint16'),
                smoothingGroups: this.readNumber('Uint32')
            }
        });
    }



    private readDispSubEdgeNeighbor() {
        return {
            neighbor: this.readNumber('Uint16'),
            neighborOrientation: this.readNumber('Uint8'),
            span: this.readNumber('Uint8'),
            neighborSpan: this.readNumber('Uint8')
        }
    }

    private readDispEdgeNeighbor() {
        return [ this.readDispSubEdgeNeighbor(), this.readDispSubEdgeNeighbor() ];
    }

    private readDispCornerNeighbor() {
        return {
            neighbors: [ this.readNumber('Int16'), this.readNumber('Int16'), this.readNumber('Int16'), this.readNumber('Int16') ],
            numNeighbors: this.readNumber('Uint8')
        }
    }

    public async getDispInfos() {
        await this.loadLump(Lump.DISPINFO);
        return this.readArrayUntilEnd(() => {
            return {
                startPosition: this.readVector(),
                dispVertStart: this.readNumber('Uint32'),
                dispTriStart: this.readNumber('Uint32'),
                power: this.readNumber('Uint32'),
                minTesselation: this.readNumber('Uint32'),
                smoothingAngle: this.readNumber('Float32'),
                contents: this.readNumber('Uint32'),
                mapFace: this.readNumber('Uint16'),
                lightmapAlphaStart: this.readNumber('Uint32'),
                lightmapSamplePositionStart: this.readNumber('Uint32'),
                edgeNeighbors: [ this.readDispEdgeNeighbor(), this.readDispEdgeNeighbor(), this.readDispEdgeNeighbor(), this.readDispEdgeNeighbor() ],
                cornerNeighbors: [ this.readDispCornerNeighbor(), this.readDispCornerNeighbor(), this.readDispCornerNeighbor(), this.readDispCornerNeighbor() ],
                allowedVerts: this.readBuffer(54)
            }
        });
    }

    public async getDispVerts() {
        await this.loadLump(Lump.DISP_VERTS);
        return this.readArrayUntilEnd(() => {
            return {
                vec: this.readVector(),
                dist: this.readNumber('Float32'),
                alpha: this.readNumber('Float32')
            }
        });
    }



    private readTextureVecs(): [ [ number, number, number, number ], [ number, number, number, number ] ] {
        return [
            [ this.readNumber('Float32'), this.readNumber('Float32'), this.readNumber('Float32'), this.readNumber('Float32') ],
            [ this.readNumber('Float32'), this.readNumber('Float32'), this.readNumber('Float32'), this.readNumber('Float32') ]
        ];
    }

    public async getTexInfos() {
        await this.loadLump(Lump.TEXINFO);
        return this.readArrayUntilEnd(() => {
            return {
                textureVecs: this.readTextureVecs(),
                lightmapVecs: this.readTextureVecs(),
                flags: this.readNumber('Uint32'),
                texData: this.readNumber('Int32')
            }
        });
    }

    public async getTexDatas() {
        await this.loadLump(Lump.TEXDATA);
        return this.readArrayUntilEnd(() => {
            return {
                reflectivity: this.readVector(),
                nameStringTableID: this.readNumber('Uint32'),
                width: this.readNumber('Uint32'),
                height: this.readNumber('Uint32'),
                view_width: this.readNumber('Uint32'),
                view_height: this.readNumber('Uint32')
            }
        });
    }

    public async getTexDataStrings() {
        await this.loadLump(Lump.TEXDATA_STRING_TABLE);
        const offsets = this.readArrayUntilEnd(this.readNumber, 'Uint32');

        await this.loadLump(Lump.TEXDATA_STRING_DATA);
        return offsets.map(offset => {
            this.pointer = offset;
            return this.readNullString();
        });
    }

}


