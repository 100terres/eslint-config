<h1 align="center">
  eslint-config-100terres
</h1>

<p align="center">
  A modern <a href="https://eslint.org/">ESlint</a> configuration for <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">JavaScript</a>, <a href="https://www.typescriptlang.org/">TypeScript</a> and <a href="https://reactjs.org/">React</a> that includes the <a href="https://github.com/airbnb/javascript">Airbnb</a> style guide, <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">jsx-a11y</a> to help with accessibility and <a href="https://www.npmjs.com/package/eslint-plugin-prettier">Pettier</a> to do some code formatting.
</p>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="eslint-config-100terres is released under the MIT license." />
  </a>

  <a href="#how-to-contribute-">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

## A bit of context

It's always a bit time consuming to create or maintain different [ESlint](https://eslint.org/) configurations that works with different languages and libraries such as [TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org/). The goal of this package is to have  different configurations that just work out-of-the-box and that are constantly kept up-to-date.

## Getting Started 🚀

Installing this packge is has as easy has any other packages. Simply use your favorite package manager. You'll need to install the required peer dependencies and than this packge.

### Install ESlint and Prettier peer dependencies

Install [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) either locally or globally. (Note that locally, per project, is strongly preferred)


```sh
npm install eslint@8 --save-dev
npm install prettier@2 --save-dev --save-exact
```

If you use [TypeScript](https://www.typescriptlang.org/) or [React](https://reactjs.org/) you'll also need to install them, but let's assume they're already installed. We'll only support most recent version. Have a look at the `peerDependencies` field in the package.json to know which one we support.

### Install eslint-config-100terres

```sh
npm install eslint-config-100terres --save-dev
```

### Setup the configuration file

Using any [file formats](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) supported by [ESlint](https://eslint.org/), youll need to add `"100terres"` in the `"extends"` value of the configuration. Here's an example using a `.eslintrc.js` file.

#### Using the full configuration with JavaScript, TypeScript and React

```js
module.exports = {
  "extends": ["100terres"],
};
```
#### JavaScript config

```js
module.exports = {
  "extends": ["100terres/js"],
};
```
#### JavaScript with React config

```js
module.exports = {
  "extends": ["100terres/js", "100terres/jsx"],
};
```
#### TypeScript config

```js
module.exports = {
  "extends": ["100terres/ts"],
};
```
#### TypeScript with React config

```js
module.exports = {
  "extends": ["100terres/ts", "100terres/tsx"],
};
```

Voilà! Your project now uses a linter.


## How to Contribute 🤝

Pull requests are welcome. If you'd like to contribute to eslint-config-100terres, that's awesome. Simply open an issue explaining what we should change, improve or fix. If we decide that a change is required we can open a pull request and once everything looks good I'll approve and merge the PR.

## License

Licensed under the [MIT license](LICENSE).
