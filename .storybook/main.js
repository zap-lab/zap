const path = require('path');
const { compilerOptions } = require('../tsconfig.json');

module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    config.resolve.modules.push(path.resolve(__dirname, '..', compilerOptions.baseUrl));
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false
            },
          },
        },
        {
          loader: 'react-docgen-typescript-loader',
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
