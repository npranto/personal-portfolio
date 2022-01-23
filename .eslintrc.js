module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		'cypress/globals': true,
	},
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@next/next/recommended',
		'plugin:cypress/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'cypress'],
	rules: {
		'no-console': 0,
		'import/extensions': 0,
		'react/jsx-filename-extension': 0,
		'react/no-unescaped-entities': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
	},
};
