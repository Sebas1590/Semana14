const js = require('@eslint/js');
const globals = require('globals');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
    extends: [js.configs.recommended],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'space-before-function-paren': ['error', 'never']
    },
  },
]);
