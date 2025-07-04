import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkButton } from './linkButton';

const meta: Meta<typeof LinkButton> = {
	title: 'Shared/Button/LinkButton',
	component: LinkButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
	args: {
		children: 'Primary Button',
		appearance: 'primary',
		href: '#',
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
		href: '#',
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
		href: '#',
	},
	decorators: [
		(Story) => (
			<div style={{ width: '200px' }}>
				<Story />
			</div>
		),
	],
};
