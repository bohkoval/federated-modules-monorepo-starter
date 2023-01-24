import { Apps } from './enums';
import { AppsModuleFederationConfig, AppModuleFederationConfig } from './types';

const hostBaseUrl = process.env.HOST_BASE_URL || '/';

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
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
        app1: `app1@${hostBaseUrl}apps/app1/dist/remoteEntry.js`,
        app2: `app2@${hostBaseUrl}apps/app2/dist/remoteEntry.js`,
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
        './components/SomeForm': './src/components/SomeForm/SomeForm',
        './styles/Global': './src/styles/Global',
        './styles/muiTheme': './src/styles/muiTheme',
        './utils/transformations': './src/utils/transformations/transformations',
        './utils/api': './src/utils/api/api',
        './queries/client': './src/queries/client',
        './queries/useFilms': './src/queries/useFilms',
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
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
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
        shared: `shared@${hostBaseUrl}packages/shared/dist/remoteEntry.js`,
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
