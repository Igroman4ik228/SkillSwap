import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
	title: 'Shared/Logo',
	component: Logo,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
	args: {
		text: 'SkillSwap',
	},
};
