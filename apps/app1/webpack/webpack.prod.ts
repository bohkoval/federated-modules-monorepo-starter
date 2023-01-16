import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import getProdCommonConfig from '@config/webpack-config/webpack.prod';

import { getCommonModuleFederationConfig } from './webpack.common';

const getProdConfig = (env: Record<string, string | boolean>): webpack.Configuration =>
  merge(getProdCommonConfig(env), {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        ...getCommonModuleFederationConfig(),
        remotes: getAppModuleFederationConfig(Apps.app1).remotes?.prod,
      }),
    ],
  });

export default getProdConfig;
