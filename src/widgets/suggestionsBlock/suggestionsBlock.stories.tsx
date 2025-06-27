import type { Meta, StoryObj } from '@storybook/react-vite';
import { SuggestionsBlock } from './suggestionsBlock';
import users from '../../../public/db/users.json';

const meta: Meta<typeof SuggestionsBlock> = {
	title: 'Widgets/SuggestionsBlock',
	component: SuggestionsBlock,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SuggestionsBlock>;

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
