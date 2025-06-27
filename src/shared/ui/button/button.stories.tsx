import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
	title: 'Shared/Button',
	component: Button,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '200px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Primary Button',
		appearance: 'primary',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '284px' }}>
				<Story />
			</div>
		),
	],
};

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
		appearance: 'secondary',
	},
};

export const Tertiary: Story = {
	args: {
		children: 'Tertiary Button',
		appearance: 'tertiary',
	},
};
