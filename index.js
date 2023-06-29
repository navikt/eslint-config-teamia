module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "next/core-web-vitals",
    "@navikt/teamia-a11y",
    "prettier", // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-empty-function": "off",
  },
  overrides: [
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/no-debugging-utils": "warn",
      },
    },
  ],
  settings: {},
  ignorePatterns: ["*.module.css", "*.{config,setup}.{ts,js}"],
};
