import * as webpack from 'webpack';
import { getSharedModulesConfig } from '@config/webpack-config/utils';
import { dependencies } from '../package.json';

const getCommonConfig = (): webpack.Configuration => ({
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './components/Button': './src/components/Button/Button',
        './components/InputWithLabel': './src/components/InputWithLabel/InputWithLabel',
        './utils/transformations': './src/utils/transformations/transformations',
      },
      shared: getSharedModulesConfig(dependencies),
    }),
  ],
});

export default getCommonConfig;
