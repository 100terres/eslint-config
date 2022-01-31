module.exports = {
  extends: require.resolve("./internal/base"),
  overrides: [
    {
      extends: [
        "./internal/javascript",
        "./internal/react",
        "./internal/typescript",
      ].map(require.resolve),
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
