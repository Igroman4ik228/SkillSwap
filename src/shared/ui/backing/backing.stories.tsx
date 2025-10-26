import type { Meta, StoryObj } from '@storybook/react-vite';
import { Backing } from './backing';

const meta: Meta<typeof Backing> = {
	title: 'shared/Backing',
	component: Backing,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Backing>;

export const Default: Story = {
	args: {
		children: <p>content</p>,
	},
};
