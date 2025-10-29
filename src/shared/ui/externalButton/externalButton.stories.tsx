import type { Meta, StoryObj } from '@storybook/react-vite';
import GoogleIcon from '@/shared/assets/icons/google.svg?react';
import { ExternalButton } from './externalButton';

const meta: Meta<typeof ExternalButton> = {
	title: 'Shared/ExternalButton',
	component: ExternalButton,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ExternalButton>;

export const Primary: Story = {
	args: {
		text: 'Продолжить с Google',
	},
};

export const WithIcon: Story = {
	args: {
		icon: <GoogleIcon />,
		text: 'Продолжить с Google',
	},
};
