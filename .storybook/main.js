const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal(config) {
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@themes'] = path.resolve(__dirname, '../src/themes');
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets');
    config.resolve.alias['@tests'] = path.resolve(__dirname, '../src/tests');
    config.resolve.alias['@emotion/core'] = path.join(process.cwd(), 'node_modules/@emotion/react');
    return config;
  }
}