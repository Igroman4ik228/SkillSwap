import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthBlock } from './authBlock';

const meta: Meta<typeof AuthBlock> = {
	title: 'Widgets/Header/AuthBlock',
	component: AuthBlock,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '310px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof AuthBlock>;

export const NotAuth: Story = {};

export const Auth: Story = {
	args: {
		user: {
			name: 'Мария',
			avatar: 'images/user-avatar.jpg',
		},
	},
};
