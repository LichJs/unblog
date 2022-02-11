import { cosmiconfigSync } from 'cosmiconfig';

const explorerSync = cosmiconfigSync('unblog');
const config = explorerSync.search();

export { config };
