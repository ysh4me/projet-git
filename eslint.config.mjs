import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Vos règles personnalisées ici
  },
});
