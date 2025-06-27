module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: { jsx: true },
		project: './tsconfig.json',
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'jsx-a11y',
		'import',
		'prettier',
	],
	extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:storybook/recommended',
	],
	settings: {
		'import/resolver': {
			typescript: {},
		},
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/no-use-before-define': ['error'],
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
			},
		],
		'react/self-closing-comp': ['error', { component: true, html: true }],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'off',
		'prettier/prettier': 'error',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'no-use-before-define': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'],
			},
		],
		'import/no-extraneous-dependencies': 'warn',
		'react/display-name': 'off',
		'no-plusplus': 'off',
		'react/button-has-type': 'off',
	},
};
