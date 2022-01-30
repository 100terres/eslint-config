// Some of it was inspired by https://github.com/facebook/create-react-app/blob/main/packages/eslint-config-react-app

module.exports = {
  overrides: [
    {
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      files: ["**/*.ts?(x)"],
      settings: {
        "import/resolver": {
          // Need this line for the eslint-import-resolver-typescript to kick in
          typescript: {},
        },
      },
      rules: {
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
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (https://github.com/facebook/create-react-app/issues/6906)
        "default-case": "off",
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        "no-dupe-class-members": "off",
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        "no-undef": "off",

        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "react/prop-types": "off",

        // https://typescript-eslint.io/rules/
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-require-imports": "error",

        // Add TypeScript specific rules and turn off ESLint equivalents
        // http://eslint.org/docs/rules/
        // https://typescript-eslint.io/rules/
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
      },
    },
  ],
};
