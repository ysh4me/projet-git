import { defineConfig } from "eslint-define-config";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig({
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  plugins: {
    prettier: eslintPluginPrettier,
  },
  rules: {
    "prettier/prettier": "error", // Active Prettier pour le formatage automatique
    eqeqeq: "error", // Exige l'utilisation de "===" au lieu de "=="
    "space-infix-ops": ["error", { int32Hint: false }], // Exigences d’espaces autour des opérateurs
    semi: ["error", "always"], // Exige le point-virgule à la fin des instructions
    "space-before-blocks": "error", // Nécessite un espace avant les blocs
  },
});
