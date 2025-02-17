import { defineConfig } from "eslint-define-config";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default defineConfig([
    {
        languageOptions: {
            parser: typescriptParser,
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
        },
        rules: {
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": "error",
        },
    },
    {
        files: ["*.js", "*.ts"],
        rules: {
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": "error",
        },
    },
]);
