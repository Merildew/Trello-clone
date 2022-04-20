module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    semi: [2, "always"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  settings: { react: { version: "detect" } },
};
