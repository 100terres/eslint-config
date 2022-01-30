// Some of it was inspired by https://github.com/facebook/create-react-app/blob/main/packages/eslint-config-react-app

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsx-a11y", "import", "prettier", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": "error",
    // Prettier recommend to turn off these two rules
    // https://github.com/prettier/eslint-plugin-prettier/issues/65
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

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

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/function-component-definition": [
      "error",
      { namedComponents: ["arrow-function", "function-declaration"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
  },
};
