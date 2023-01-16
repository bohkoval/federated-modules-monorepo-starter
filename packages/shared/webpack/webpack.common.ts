import * as webpack from 'webpack';
import { getSharedModulesConfig } from '@config/webpack-config/utils';
import { Apps } from '@config/webpack-config/enums';
import { CompleteModuleFederationConfig } from '@config/webpack-config/types';
import {
  getAppModuleFederationConfig,
  getDtsModuleConfig,
} from '@config/webpack-config/module-federation';
import { dependencies } from '../package.json';

const getCommonConfig = (): webpack.Configuration => ({
  module: {
    rules: [getDtsModuleConfig(Apps.shared)],
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      ...getAppModuleFederationConfig(Apps.shared).baseConfig,
      shared: getSharedModulesConfig(dependencies),
    } as CompleteModuleFederationConfig),
  ],
});

export default getCommonConfig;
