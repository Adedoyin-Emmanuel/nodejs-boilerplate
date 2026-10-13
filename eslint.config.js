const { FlatCompat } = require("@eslint/eslintrc");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends("airbnb-base"),
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.node,
    },
    rules: {
      "import/extensions": "off",
      "import/no-unresolved": "off",
    },
  },
];
