# webpack-library-starter

Webpack based boilerplate for producing libraries (Input: ES6, Output: universal library)

[![Build status](https://travis-ci.org/permettez-moi-de-construire/webpack-library-starter.svg?branch=master)](https://travis-ci.org/permettez-moi-de-construire/webpack-library-starter.svg?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/<badgeid>/maintainability)](https://codeclimate.com/github/permettez-moi-de-construire/webpack-library-starter/maintainability)

## Process

```
ES6 source files
       |
       |
    webpack
       |
       +--- babel, eslint
       |
  ready to use
     library
  in umd format
```

## Usage

See [API documentation](doc/API.md)

## Scripts

* `npm run compile` - produce builds for the app
* `npm run test` - run tests
* `npm run build` - compile and run tests
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test:watch` - run tests in watch mode
