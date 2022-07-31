const path = require('path');
const { mergeConfig } = require('vite');
const svgr = require('vite-plugin-svgr');

module.exports = {
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
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr()],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@components': path.resolve(__dirname, '../src/components'),
          '@themes': path.resolve(__dirname, '../src/themes'),
          '@assets': path.resolve(__dirname, '../src/assets'),
          '@tests': path.resolve(__dirname, '../src/tests'),
        },
      },
    });
  },
};
