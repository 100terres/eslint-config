module.exports = {
  extends: require.resolve("./internal/base"),
  overrides: [
    {
      extends: ["./internal/javascript", "./internal/typescript"].map(
        require.resolve
      ),
      files: ["**/*.ts"],
    },
  ],
};
