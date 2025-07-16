import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogoutButton } from './logoutButton';

const meta: Meta<typeof LogoutButton> = {
	title: 'shared/UserDropdown/LogoutButton',
	component: LogoutButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
	args: {
		onLogout: () => {
			console.log('User logged out');
		},
	},
};
