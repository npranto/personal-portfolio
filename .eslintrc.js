module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-console': 0,
		'import/extensions': 0,
		'react/jsx-filename-extension': 0,
		'react/no-unescaped-entities': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
	},
};
