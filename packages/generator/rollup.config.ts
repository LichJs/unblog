import esbuild from 'rollup-plugin-esbuild';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const { main, module: esModule } = pkg;

const output = [
  { file: main, format: 'cjs' },
  { file: esModule, format: 'es' },
];

const plugins = [
  esbuild({ minify: process.env.NODE_ENV === 'production' }),
  commonjs(),
  resolve(),
];

export default {
  input: 'src/main.ts',
  external: ['axios'],
  output,
  plugins,
};
