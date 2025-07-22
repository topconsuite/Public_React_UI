

const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: async (config) => {
    // Configurar aliases do TypeScript para o Storybook
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@atoms': path.resolve(__dirname, '../src/atoms'),
      '@molecules': path.resolve(__dirname, '../src/molecules'),
      '@organisms': path.resolve(__dirname, '../src/organisms'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@libraries': path.resolve(__dirname, '../src/libraries'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@styles': path.resolve(__dirname, '../src/styles')
    };
    
    // Adicionar polyfills para módulos Node.js
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/")
    };
    
    return config;
  }
};
export default config;