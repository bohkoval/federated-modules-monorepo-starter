import { Apps } from './enums';
import { AppsModuleFederationConfig, AppModuleFederationConfig } from './types';

const appsModuleFederationConfig: AppsModuleFederationConfig = {
  [Apps.main]: {
    devPort: 3000,
    analyzerPort: 4000,
    baseConfig: {
      name: 'main',
      filename: 'remoteEntry.js',
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
        app1: 'app1@http://localhost:3002/remoteEntry.js',
        app2: 'app2@http://localhost:3003/remoteEntry.js',
      },
      prod: {
        shared: `shared@${process.env.PROD_HOST}/remoteEntry.js`,
        app1: `app1@${process.env.PROD_HOST}/remoteEntry.js`,
        app2: `app2@${process.env.PROD_HOST}/remoteEntry.js`,
      },
    },
  },
  [Apps.shared]: {
    devPort: 3001,
    analyzerPort: 4001,
    baseConfig: {
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './components/Button': './src/components/Button/Button',
        './components/InputWithLabel': './src/components/InputWithLabel/InputWithLabel',
        './components/MemeImage': './src/components/MemeImage/MemeImage',
        './utils/transformations': './src/utils/transformations/transformations',
        './stores/count': './src/stores/count',
      },
    },
  },
  [Apps.app1]: {
    devPort: 3002,
    analyzerPort: 4002,
    baseConfig: {
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './App1': './src/App1',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${process.env.PROD_HOST}/remoteEntry.js`,
      },
    },
  },
  [Apps.app2]: {
    devPort: 3003,
    analyzerPort: 4003,
    baseConfig: {
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App2': './src/App2',
      },
    },
    remotes: {
      dev: {
        shared: 'shared@http://localhost:3001/remoteEntry.js',
      },
      prod: {
        shared: `shared@${process.env.PROD_HOST}/remoteEntry.js`,
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
