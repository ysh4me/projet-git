import { defineConfig } from "eslint-define-config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        structuredClone: "readonly", // Add structuredClone as a global variable
      },
      ecmaVersion: 12, // For ES2021 (ES2021 is version 12 in the ECMAScript specification)
      sourceType: "module", // Set as module if you use ES modules
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      eqeqeq: "error", // Removed quotes
      "space-infix-ops": ["error", { int32Hint: false }],
      semi: ["error", "always"], // Removed quotes
      "space-before-blocks": "error",
    },
  },
  {
    files: ["*.js"],
    rules: {
      ...eslintConfigPrettier.rules, // Apply Prettier formatting rules for JavaScript files
    },
  },
]);
