module.exports = {
  extends: require.resolve("./internal/base"),
  overrides: [
    {
      extends: ["./internal/javascript", "./internal/react"].map(
        require.resolve
      ),
      files: ["**/*.jsx"],
    },
  ],
};
