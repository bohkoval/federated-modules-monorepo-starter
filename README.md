# React Monorepo Starter

Starter to bootstrap a web application, composite of React microfrontends and shared components with the help of Module Federation.

## Installation

1. Install Node 14 or later
2. Install pnpm package manager. pnpm is used since it runs faster and solves [NPM doppelgangers problem](https://rushjs.io/pages/advanced/npm_doppelgangers/). For pnpm installation instruction visit [official doc](https://pnpm.io/installation)
3. Run `pnpm install` to install dependencies
4. Install [husky](https://typicode.github.io/husky/#/) and initialize it (via `husky install`) to provide better dev experience (git hooks)

## Usage

### Develop

`pnpm dev` - to start development. This will the whole app up & running. You can also run each sub-app independently by running the command inside them

### Build

`pnpm build` - to compile the whole app.

### Testing

`pnpm test` - to launch Jest + React Testing Library tests for the whole app.

### Linting

`pnpm lint` - to launch ESLint check for the whole app.

## Tech stack

The app in general (and each separate sub-app in particular) are built on top of:

- [Turborepo](https://turbo.build/repo) - for smart & efficient monorepo management
- [pnpm](https://pnpm.io/) - for faster package management and solving [NPM doppelgangers problem](https://rushjs.io/pages/advanced/npm_doppelgangers/).
- [TypeScript](https://www.typescriptlang.org/docs/) (v4+)
- [Webpack](https://webpack.js.org/) (v5+) - with [module federation](https://webpack.js.org/concepts/module-federation/) to be able to ship & deploy apps separately
- [React](https://reactjs.org/) (v18+)
- [React Router](https://reactrouter.com/en/main) (v6+) - NOTE: make sure you do not use Router if it is remote (mfe) app - Router to be present only in host (main) app
- [Zustand](https://github.com/pmndrs/zustand) (v4+) - as lightweight alternative to redux for client-side state management
- [React Query](https://github.com/tanstack/query) (v4+) - for async server-side state management
- [Emotion](https://emotion.sh/docs/introduction) (v11+) - for CSS-in-JS styling approach
- [Jest](https://jestjs.io/docs/getting-started) (v29+)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (v13+)
- [ESLint](https://eslint.org/docs/latest/) + [Prettier](https://prettier.io/docs/en/index.html) + [lint-staged](https://github.com/okonet/lint-staged) + [husky](https://github.com/typicode/husky) - for code quality and better DevExperience

## Apps and Packages

- `app/app1`: Example of some React MFE app
- `app/app2`: Another example of some React MFE app, which has some shared components with app1
- `app/shell`: Container React app, which places and orchestrates React MFEs (app1 and app2) 
- `app/components`: package with shared components (buttons, fields, etc.), which are used by the apps
- `app/config`: package with shared configs for the used tools (ts, eslint, webpack, babel, etc.)
