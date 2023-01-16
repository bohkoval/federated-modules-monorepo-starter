import * as webpack from 'webpack';
import { getSharedModulesConfig } from '@config/webpack-config/utils';
import { CommonModuleFederationConfig } from '@config/webpack-config/types';
import { Apps } from '@config/webpack-config/enums';
import {
  getAppModuleFederationConfig,
  getDtsModuleConfig,
} from '@config/webpack-config/module-federation';
import { dependencies } from '../package.json';

export const getCommonModuleFederationConfig = (): CommonModuleFederationConfig => ({
  ...getAppModuleFederationConfig(Apps.app2).baseConfig,
  shared: getSharedModulesConfig(dependencies),
});

const getCommonConfig = (): webpack.Configuration => ({
  module: {
    rules: [getDtsModuleConfig(Apps.app2)],
  },
});

export default getCommonConfig;
