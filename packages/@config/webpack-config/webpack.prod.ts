import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

import getCommonConfig from './webpack.common';

const getProdCommonConfig = (): webpack.Configuration =>
  merge(getCommonConfig(), {
    devtool: false,
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin()],
    },
  });

export default getProdCommonConfig;
