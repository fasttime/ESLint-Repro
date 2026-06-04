import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['index.js'],
		rules: {
			'no-console': 'error',
		},
	},
]);
