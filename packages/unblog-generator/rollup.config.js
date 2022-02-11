import esbuild from 'rollup-plugin-esbuild';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/main.ts',
  external: ['os', 'path', 'module', 'fs', 'util'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    { file: pkg.browser, format: 'umd' },
  ],
  plugins: [esbuild(), commonjs(), resolve()],
};
