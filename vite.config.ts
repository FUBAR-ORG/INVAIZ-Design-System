import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

import { compilerOptions } from './tsconfig.json';
// Typescript Config files

const pathsToModuleNameMapper = (
  paths: Record<string, string[]>
): { find: string; replacement: string }[] =>
  Object.entries(paths).map(([alias, [p]]) => ({
    find: alias.replace('/*', ''),
    replacement: path.resolve(__dirname, p.replace('/*', '')),
  }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr()],
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
    alias: pathsToModuleNameMapper(compilerOptions.paths),
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});
