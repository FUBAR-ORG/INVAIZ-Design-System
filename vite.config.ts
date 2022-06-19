import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  root: path.resolve('./'),
  publicDir: path.resolve('./public'),
  server: {
    port: 8080,
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
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@test': path.resolve(__dirname, 'src/test'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});
