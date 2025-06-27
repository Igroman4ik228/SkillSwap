import type { Meta, StoryObj } from '@storybook/react-vite';
import { AdditionalButtons } from './additionalButtons';

const meta: Meta<typeof AdditionalButtons> = {
	title: 'Widgets/Header/AdditionalButtons',
	component: AdditionalButtons,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdditionalButtons>;

export const NotAuth: Story = {};

export const Auth: Story = {
	args: {
		isAuth: true,
	},
};
