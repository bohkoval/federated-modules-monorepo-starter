import { Apps } from './enums';

export type SharedModulesConfig = Record<string, { singleton: boolean; requiredVersion: string }>;

export type AppModuleFederationConfig = {
  devPort: number;
  analyzerPort: number;
  baseConfig: {
    name: string;
    filename: string;
    exposes?: Record<string, string>;
  };
  remotes?: {
    dev: Record<string, string>;
    prod: Record<string, string>;
  };
};

export type CommonModuleFederationConfig = AppModuleFederationConfig['baseConfig'] & {
  shared: SharedModulesConfig;
};

export type CompleteModuleFederationConfig = CommonModuleFederationConfig & {
  remotes?: Record<string, string>;
};

export type AppsModuleFederationConfig = {
  [key in Apps]: AppModuleFederationConfig;
};
