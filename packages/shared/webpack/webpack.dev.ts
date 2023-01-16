import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import getDevCommonConfig from '@config/webpack-config/webpack.dev';

import getCommonConfig from './webpack.common';

const getDevConfig = (): webpack.Configuration =>
  merge(getDevCommonConfig({ port: 3001 }), getCommonConfig());

export default getDevConfig;
