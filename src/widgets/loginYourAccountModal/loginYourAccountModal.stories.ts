import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginYourAccountModal } from './loginYourAccountModal';

const meta: Meta<typeof LoginYourAccountModal> = {
	title: 'Widgets/LoginYourAccountModal',
	component: LoginYourAccountModal,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginYourAccountModal>;

export const Opened: Story = {
	args: {
		isOpen: true,
	},
};
