import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { SharedModule, Apps } from './enums';
import { SharedModulesConfig } from './types';
import { getAppModuleFederationConfig } from './module-federation';

export const getSharedModulesConfig = (
  dependencies: Record<string, string>
): SharedModulesConfig => {
  return Object.values(SharedModule).reduce(
    (sharedModulesConfig, moduleName) =>
      dependencies[moduleName]
        ? {
            ...sharedModulesConfig,
            [moduleName]: {
              singleton: true,
              requiredVersion: dependencies[moduleName],
            },
          }
        : sharedModulesConfig,
    {} as SharedModulesConfig
  );
};

export const getBundleAnalyzerPlugin = (appName: Apps) =>
  new BundleAnalyzerPlugin({
    analyzerPort: getAppModuleFederationConfig(appName).analyzerPort,
  });
