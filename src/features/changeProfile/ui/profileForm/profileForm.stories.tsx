import type { TUser } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileForm } from './profileForm';

const meta: Meta<typeof ProfileForm> = {
	title: 'Features/UserProfileForm',
	component: ProfileForm,
	decorators: [
		(Story) => (
			<div
				style={{
					width: 900,
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof ProfileForm>;

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
