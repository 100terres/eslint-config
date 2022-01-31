module.exports = {
  extends: require.resolve("./internal/base"),
  overrides: [
    {
      extends: require.resolve("./internal/javascript"),
      files: ["**/*.js"],
    },
  ],
};
