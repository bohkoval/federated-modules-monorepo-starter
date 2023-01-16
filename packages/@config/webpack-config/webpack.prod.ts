import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import getCommonConfig from './webpack.common';

const getProdCommonConfig = (env: Record<string, string | boolean>): webpack.Configuration =>
  merge(getCommonConfig(), {
    devtool: false,
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin()],
    },
    plugins: [...(env.analyze ? [new BundleAnalyzerPlugin()] : [])],
  });

export default getProdCommonConfig;
