import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import getProdCommonConfig from '@config/webpack-config/webpack.prod';
import { getBundleAnalyzerPlugin } from '@config/webpack-config/utils';

import getCommonConfig, { getCommonModuleFederationConfig } from './webpack.common';

const getProdConfig = (env: Record<string, string | boolean>): webpack.Configuration => {
  const remotes = getAppModuleFederationConfig(Apps.app1).remotes?.[
    env.local ? 'localProd' : 'prod'
  ];
  return merge(getProdCommonConfig(), getCommonConfig(), {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        ...getCommonModuleFederationConfig(),
        remotes: remotes,
      }),
      ...(env.analyze ? [getBundleAnalyzerPlugin(Apps.app1)] : []),
    ],
  });
};

export default getProdConfig;
