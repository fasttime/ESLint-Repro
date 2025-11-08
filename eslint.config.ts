import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error'
    },
  },
]);
