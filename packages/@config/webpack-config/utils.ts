const sharedModules = ['react', 'react-dom', 'react-router-dom', '@emotion/react', '@mui/material'];

type SharedModulesConfig = Record<string, { singleton: boolean; requiredVersion: string }>;

export const getSharedModulesConfig = (
  dependencies: Record<string, string>
): SharedModulesConfig => {
  return sharedModules.reduce(
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
