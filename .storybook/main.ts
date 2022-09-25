import type { StorybookViteConfig } from '@storybook/builder-vite';
// types

import path from 'path';
import { type UserConfig, mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

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
          '@components': path.resolve(__dirname, '../src/components'),
          '@themes': path.resolve(__dirname, '../src/themes'),
          '@assets': path.resolve(__dirname, '../src/assets'),
          '@tests': path.resolve(__dirname, '../src/tests'),
        },
      },
    });
  },
};

export default config;
