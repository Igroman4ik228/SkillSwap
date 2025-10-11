import type { TUsers } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SuggestionsBlock } from './suggestionsBlock';

const meta: Meta<typeof SuggestionsBlock> = {
	title: 'Widgets/SuggestionsBlock',
	component: SuggestionsBlock,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SuggestionsBlock>;

const response = await fetch('/db/users.json');
const usersData = await response.json();

const users = usersData as TUsers[];

export const Default: Story = {
	args: {
		suggestedUsers: users,
		currentUser: users[2],
	},
};

export const Another: Story = {
	args: {
		suggestedUsers: users,
		currentUser: users[3],
	},
};

export const Another2: Story = {
	args: {
		suggestedUsers: users,
		currentUser: users[4],
	},
};
