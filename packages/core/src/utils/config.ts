import { cosmiconfigSync } from 'cosmiconfig';

const explorerSync = cosmiconfigSync('gitblog');
const config = explorerSync.search();
console.log(config);

export { config };
