import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import getProdCommonConfig from '@config/webpack-config/webpack.prod';

import getCommonConfig from './webpack.common';

const getProdConfig = (env: Record<string, string | boolean>): webpack.Configuration =>
  merge(getProdCommonConfig(env), getCommonConfig());

export default getProdConfig;
