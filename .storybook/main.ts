import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	framework: '@storybook/react-vite',
	addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
};

export default config;
