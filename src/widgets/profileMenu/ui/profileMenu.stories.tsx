import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileMenu } from './profileMenu';

const meta: Meta<typeof ProfileMenu> = {
	title: 'Widgets/ProfileMenu',
	component: ProfileMenu,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof ProfileMenu>;

export const Default: Story = {};
