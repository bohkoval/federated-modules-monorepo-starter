import { getSharedModulesConfig } from '@config/webpack-config/utils';
import { CommonModuleFederationConfig } from '@config/webpack-config/types';
import { Apps } from '@config/webpack-config/enums';
import { getAppModuleFederationConfig } from '@config/webpack-config/module-federation';
import { dependencies } from '../package.json';

export const getCommonModuleFederationConfig = (): CommonModuleFederationConfig => ({
  ...getAppModuleFederationConfig(Apps.app1).baseConfig,
  shared: getSharedModulesConfig(dependencies),
});
