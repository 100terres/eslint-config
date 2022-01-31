module.exports = {
  extends: ["./internal/base", "./js", "./jsx", "./ts", "./tsx"].map(
    require.resolve
  ),
};
