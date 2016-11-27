# Reactor - React JS Starter

## Introduction
Reactor is a starter kit which allows you to kick-start a React JS / TypeScript project with very minimal effort.

React comes with following tools configured.

- React : The main UI library
- React Router : Routing for React JS
- TypeScript : Adds a type system for JavaScript
- Jest - Painless JavaScript testing tool
- TsLint - TypeScript linter
- JsLint - JavaScript linter
- Enzyme - React JS testing utility
- Webpack - Assets bundler
- Sass - Sass based styles
- Commitizen - Make all your team members commit in the same format.

## Usage

Run the following commands as soon as you clone the kit.
```bash
npm install // This will install the node modules required by the kit.
```

```bash
npm run typings // This will install the typescript typings files.
```

#### Starting the dev server
```bash
npm start
```

#### Building for production
```bash
npm build
```

#### Run all the test once
```bash
npm test
```

#### Run the tests in watch mode (Suitable while writting tests)
```bash
npm run test-watch
```

#### Generate the coverage report
```bash
npm run test-cover
```

## Additional features

### Webpack Dashboard
Webpack outputs to the console but it could be hard at times to look at it. [Webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard) solves this issue by introducing a simple 
commandline interface which makes it easy to look at webpack output.

Reactor comes with Webpack dashboard. But consider it a beta feature for now.

```bash
npm run start-dash
```

### A word on linting
TSLint is used for linting the code. Apart from the core rules of TSLint, following rules are used.

- Tslint-React - [https://github.com/palantir/tslint-react](https://github.com/palantir/tslint-react)
- Tslint-microsoft-contrib - [https://github.com/Microsoft/tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)

### Commit with style
Reactor comes with [Commitizen](http://commitizen.github.io/cz-cli/). Commitizen helps to make commit messages similiar across team members.

Stage your files and run `npm run commit`.

## Contribute
If you add a new feature or fix a bug, please send a PR.

## License
Copyright (c) 2016 Zone24x7 Inc
