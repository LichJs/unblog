import { cosmiconfigSync } from 'cosmiconfig';

interface UnblogConfig {
  /** github repository link */
  repo: string;
}

const explorerSync = cosmiconfigSync('unblog');
const search = explorerSync.search();
const config: UnblogConfig = search ? search.config : null;

export { config };
