module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:cypress/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['cypress'],
  rules: {
    'no-console': 'off',
    'import/extensions': 0,
  },
};
