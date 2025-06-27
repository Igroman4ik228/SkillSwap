import { StoreDecorator } from '@/shared/utils/decorators';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './header';

const meta: Meta<typeof Header> = {
	title: 'Widgets/Header',
	component: Header,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: 1368, margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const NotAuth: Story = {};

export const Auth: Story = {
	decorators: [
		StoreDecorator({
			user: {
				data: {
					id: '1',
					name: 'Мария',
					avatar: 'images/user-avatar.jpg',
				},
			},
		}),
	],
};

export const Pure: Story = {
	args: {
		appearance: 'pure',
	},
};
