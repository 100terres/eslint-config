module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    require.resolve("./final"),
  ],
  plugins: ["react", "react-hooks", "jsx-a11y"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/function-component-definition": [
      "error",
      { namedComponents: ["arrow-function", "function-declaration"] },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
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
