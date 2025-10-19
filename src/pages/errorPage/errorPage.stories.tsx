import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorPage } from './errorPage';

const meta: Meta<typeof ErrorPage> = {
	title: 'Pages/PageError',
	component: ErrorPage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

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
