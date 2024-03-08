module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      // files: [".eslintrc.{js,cjs}"],
      files: ["*.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/strict-boolean-expressions": "off", // disabled to run tests
    "prettier/prettier": "error",
  },
  plugins: ["prettier"],
};
