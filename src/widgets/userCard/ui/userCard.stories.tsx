import type { Meta, StoryObj } from '@storybook/react-vite';
import type { TUserCard } from '../model/types';
import { UserCard } from './userCard';

const meta: Meta<typeof UserCard> = {
	title: 'Widgets/UserCard',
	component: UserCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserCard>;

const userCardMock: TUserCard = {
	id: '85dd190e-ffcf-49df-b883-d16d7f31b457',
	name: 'Михаил',
	city: 'Ростов-на-Дону',
	age: 27,
	teach: 'Управление командой',
	learn: [
		'Тайм менеджмент',
		'Медитация',
		'Проектное управление',
		'Продажи и переговоры',
	],
	avatar: 'images/user-avatar.jpg',
	isFavorite: false,
	isExchangeRequested: false,
	description:
		'Михаил умеет выстраивать процессы и вдохновлять команду на достижение целей. С радостью поделится практическими приёмами делегирования и мотивации.',
};

export const Primary: Story = {
	args: {
		userCardData: userCardMock,
	},
};

export const Favorite: Story = {
	args: {
		userCardData: { ...userCardMock, isFavorite: true },
	},
};

export const ExchangeRequested: Story = {
	args: {
		userCardData: {
			...userCardMock,
			isExchangeRequested: true,
		},
	},
};

export const WithDescription: Story = {
	args: {
		userCardData: {
			...userCardMock,
		},
		showDescription: true,
	},
};
