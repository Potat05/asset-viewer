import type { Viewer } from "$lib/viewer/Viewer";

const viewer: Viewer = {
    namespace: 'none',
    priority: -1,
    isValid: async entry => true,
    transform: async entry => entry,
    createViewer: async (entry, target) => { }
};

export default viewer;
