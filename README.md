<h1 align="center">
  eslint-config-100terres
</h1>

<p align="center">
  <a href="https://github.com/100terres/eslint-config">eslint-config-100terres</a> is a modern <a href="https://eslint.org/">ESlint</a> configuration for <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">JavaScript</a> and <a href="https://www.typescriptlang.org/">TypeScript</a> that includes <a href="https://github.com/airbnb/javascript">Airbnb</a>, <a href="https://github.com/yannickcr/eslint-plugin-react">React</a>, <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">jsx-a11y</a> and <a href="https://www.npmjs.com/package/eslint-plugin-prettier">Pettier</a> rules.
</p>

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="eslint-config-100terres is released under the MIT license." />
  </a>

  <a href="#how-to-contribute">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

## A bit of context

I was a tired to always re-create this little [ESlint](https://eslint.org/) configuration each time I started a new project. So I've decided to create it once and for all.

## Getting Started 🚀

To start with the eslint, it's as easy has any other package. Simply use your favorite package manager. You'll also need to install eslint and prettier with it.

### Install ESlint and Prettier peer dependencies

Install [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) either locally or globally. (Note that locally, per project, is strongly preferred)


```sh
npm install eslint@8 --save-dev
npm install prettier@2 --save-dev --save-exact
```

### Install eslint-config-100terres

```sh
npm install eslint-config-100terres --save-dev
```

### Setup the configuration file

Using any [file formats](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) supported by [ESlint](https://eslint.org/), youll need to add `"100terres"` in the `"extends"` value of the configuration. Here's an example using a `.eslintrc.js` file.

#### Using the basic JavaScript configuration

```js
module.exports = {
  "extends": ["100terres"],
};
```
#### The configuration for TypeScript project

```js
module.exports = {
  "extends": ["100terres", "100terres/typescript"],
};
```

And voilà! You can now use [ESlint](https://eslint.org/) with this config.


## How to Contribute 🤝

Pull requests are welcome. If you'd like to contribute to eslint-config-100terres, that's awesome. Simply open an issue explaining what we should change, improve or fix. If we decide that a change is required we can open a pull request and once everything looks good I'll approve and merge the PR.

## License

Licensed under the [MIT license](LICENSE).
