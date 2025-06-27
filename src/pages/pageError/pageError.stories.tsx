import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageErrorBase } from './pageErrorBase';

const meta: Meta<typeof PageErrorBase> = {
	title: 'Pages/PageError',
	component: PageErrorBase,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageErrorBase>;

export const Error404: Story = {
	args: {
		statusCode: 404,
	},
};

export const Error500: Story = {
	args: {
		statusCode: 500,
	},
};
