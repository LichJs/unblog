///<reference types="vitest"/>

import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  test: {
    global: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  server: {
    https: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: true,
      },
    },
  },
  plugins: [
    vue(),
    jsx(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
