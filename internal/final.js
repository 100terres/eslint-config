// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  extends: ["prettier"],
  plugins: ["import", "prettier"],

  rules: {
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": "error",
    // Prettier recommend to turn off these two rules
    // https://github.com/prettier/eslint-plugin-prettier/issues/65
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // http://eslint.org/docs/rules/
    "no-console": "error",
    // Overriding airbnb rule
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js#L63-L70
    // https://github.com/airbnb/javascript/issues/2500
    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: ["then"],
      },
    ],
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
  },
};
