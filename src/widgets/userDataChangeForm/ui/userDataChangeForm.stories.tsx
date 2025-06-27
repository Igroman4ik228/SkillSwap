import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { userReducer, initialUserState } from '@/entities';
import { configureStore } from '@reduxjs/toolkit';
import { UserDataChangeForm } from './userDataChangeForm';

const mockUser = {
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

const mockStore = configureStore({
	reducer: {
		user: userReducer,
	},
	preloadedState: {
		user: {
			...initialUserState,
			data: mockUser,
		},
	},
});

const meta: Meta<typeof UserDataChangeForm> = {
	title: 'widgets/UserDataChangeForm',
	component: UserDataChangeForm,
	decorators: [
		(Story) => (
			<Provider store={mockStore}>
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
			</Provider>
		),
	],
};

export default meta;
type Story = StoryObj<typeof UserDataChangeForm>;

export const Default: Story = {};
