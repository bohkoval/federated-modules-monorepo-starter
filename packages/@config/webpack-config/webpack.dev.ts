import * as path from 'path';
import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import 'webpack-dev-server';

import getCommonConfig from './webpack.common';

const getDevCommonConfig = ({ port }: { port: number }): webpack.Configuration =>
  merge(getCommonConfig(), {
    mode: 'development',
    devServer: {
      static: {
        directory: path.join(process.cwd(), 'dist'),
      },
      port: port || 3001,
      devMiddleware: {
        writeToDisk: true,
      },
      historyApiFallback: true,
      hot: 'only',
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        API_BASE_URL: 'https://swapi.dev',
      }),
    ],
  });

export default getDevCommonConfig;
