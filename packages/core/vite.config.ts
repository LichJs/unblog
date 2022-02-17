import * as path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import mdx from '@mdx-js/rollup';
import { babel } from '@rollup/plugin-babel';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    mdx({
      jsx: true,
      remarkPlugins: [
        remarkFrontmatter,
        remarkGfm,
        remarkAutolinkHeadings,
        remarkSlug,
      ],
    }),
    babel({
      // Also run on what used to be `.mdx` (but is now JS):
      extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
      plugins: ['@vue/babel-plugin-jsx'],
    }),
    legacy(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
});
