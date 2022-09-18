import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  root: path.resolve('./'),
  publicDir: path.resolve('./public'),
  server: {
    port: 8000,
    open: true,
    hmr: {
      overlay: true,
    },
    watch: {},
  },
  build: {
    outDir: path.resolve('./dist'),
    manifest: true,
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@tests': path.resolve(__dirname, 'src/tests'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});
