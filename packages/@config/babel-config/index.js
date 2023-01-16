/* eslint-env node */
module.exports = {
  plugins: ['@emotion'],
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    '@babel/preset-typescript',
  ],
};
