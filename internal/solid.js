module.exports = {
  extends: [
    "airbnb",
    "plugin:solid/recommended",
    "plugin:jsx-a11y/recommended",
    require.resolve("./final"),
  ],
  plugins: ["solid", "jsx-a11y"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
