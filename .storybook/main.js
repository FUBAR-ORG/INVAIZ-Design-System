const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.resolve.alias["@theme"] = path.resolve(__dirname, "../src/theme");
    config.resolve.alias["@components"] = path.resolve(__dirname, "../src/components");
    config.resolve.alias["@test"] = path.resolve(__dirname, "../src/test");
    config.resolve.alias['@emotion/core'] = path.join(process.cwd(), 'node_modules/@emotion/react')
    return config;
  }
}