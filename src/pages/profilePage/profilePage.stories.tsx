import type { TUser } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfilePage } from './profilePage';

const meta: Meta<typeof ProfilePage> = {
	title: 'Pages/ProfilePage',
	component: ProfilePage,
	decorators: [
		(Story) => (
			<div
				style={{
					maxWidth: 1000,
					margin: '2rem auto',
					display: 'flex',
					gap: '196px',
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const mockUser: TUser = {
	id: '1',
	email: 'Mariia@gmail.com',
	name: 'Мария',
	city: 'Москва',
	gender: 'Женский' as 'Женский' | 'Мужской',
	bornDate: '28.10.1995',
	avatar: 'images/user-avatar.jpg',
	description:
		'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме. Всегда готова пообщаться и обменяться чем‑то интересным!',
};

export const Primary: Story = {
	parameters: {
		initialState: {
			user: {
				data: {
					...mockUser,
				},
			},
		},
	},
};
