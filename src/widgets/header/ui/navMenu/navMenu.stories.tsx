import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavMenu } from './navMenu';

const meta: Meta<typeof NavMenu> = {
	title: 'Widgets/Header/NavMenu',
	component: NavMenu,
	tags: ['autodocs'],
	decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof NavMenu>;

export const NotAuth: Story = {};

export const Auth: Story = {
	args: {
		user: {
			name: 'Мария',
			avatar: 'images/user-avatar.jpg',
		},
	},
};
