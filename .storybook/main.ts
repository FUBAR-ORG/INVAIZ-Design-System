import type { StorybookViteConfig } from '@storybook/builder-vite';
// types

import path from 'path';
import { type UserConfig, mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { compilerOptions } from '../tsconfig.json';
// Typescript Config files

const pathsToModuleNameMapper = (paths: Record<string, string[]>): Record<string, string> =>
  Object.entries(paths).reduce(
    (previous, [alias, [p]]) => ({
      ...previous,
      [alias.replace('/*', '')]: path.resolve(process.cwd(), p.replace('/*', '')),
    }),
    {}
  );

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ['../public'],
  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      plugins: [svgr()],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...pathsToModuleNameMapper(compilerOptions.paths),
        },
      },
    });
  },
};

export default config;
