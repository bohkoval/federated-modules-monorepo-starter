import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import { getBundleAnalyzerPlugin } from '@config/webpack-config/utils';
import getProdCommonConfig from '@config/webpack-config/webpack.prod';

import getCommonConfig, { getCommonModuleFederationConfig } from './webpack.common';

const getProdConfig = (env: Record<string, string | boolean>): webpack.Configuration => {
  const remotes = getAppModuleFederationConfig(Apps.main).remotes?.[
    env.local ? 'localProd' : 'prod'
  ];
  return merge(getProdCommonConfig(), getCommonConfig(), {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        ...getCommonModuleFederationConfig(),
        remotes,
      }),
      ...(env.analyze ? [getBundleAnalyzerPlugin(Apps.main)] : []),
    ],
  });
};

export default getProdConfig;
