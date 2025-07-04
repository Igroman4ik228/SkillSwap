import type { Meta, StoryObj } from '@storybook/react-vite';
import { RouterLinkButton } from './routerLinkButton';

const meta: Meta<typeof RouterLinkButton> = {
	title: 'Shared/Button/RouterLinkButton',
	component: RouterLinkButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RouterLinkButton>;

export const Primary: Story = {
	args: {
		children: 'Primary Button',
		appearance: 'primary',
		to: '/',
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
		to: '/',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '200px' }}>
				<Story />
			</div>
		),
	],
};

export const Tertiary: Story = {
	args: {
		children: 'Tertiary Button',
		appearance: 'tertiary',
		to: '/',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '200px' }}>
				<Story />
			</div>
		),
	],
};
