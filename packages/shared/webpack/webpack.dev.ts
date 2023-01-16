import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import getDevCommonConfig from '@config/webpack-config/webpack.dev';

import getCommonConfig from './webpack.common';

const getDevConfig = (): webpack.Configuration =>
  merge(
    getDevCommonConfig({ port: getAppModuleFederationConfig(Apps.shared).devPort }),
    getCommonConfig()
  );

export default getDevConfig;
