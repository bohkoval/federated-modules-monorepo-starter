import { Apps } from './enums';
import { AppsModuleFederationConfig, AppModuleFederationConfig } from './types';

const appsModuleFederationConfig: AppsModuleFederationConfig = {
  [Apps.shared]: {
    devPort: 3001,
    baseConfig: {
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './components/Button': './src/components/Button/Button',
        './components/InputWithLabel': './src/components/InputWithLabel/InputWithLabel',
        './components/MemeImage': './src/components/MemeImage/MemeImage',
        './utils/transformations': './src/utils/transformations/transformations',
      },
    },
  },
  [Apps.app1]: {
    devPort: 3002,
    baseConfig: {
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@http://${process.env.PROD_HOST}/remoteEntry.js`,
      },
    },
  },
};

export const getAppModuleFederationConfig = (appName: Apps): AppModuleFederationConfig =>
  appsModuleFederationConfig[appName];

export const getDtsModuleConfig = (appName: Apps) => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'dts-loader',
      options: {
        name: getAppModuleFederationConfig(appName).baseConfig.name,
        exposes: getAppModuleFederationConfig(appName).baseConfig.exposes,
        typesOutputDir: '.wp_federation',
      },
    },
  ],
});
