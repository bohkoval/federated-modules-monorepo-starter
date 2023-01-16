import { SharedModule } from './enums';
import { SharedModulesConfig } from './types';

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
