import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserDropdown } from './userDropdown';

const meta: Meta<typeof UserDropdown> = {
	title: 'shared/UserDropdown',
	component: UserDropdown,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div
				style={{
					position: 'relative',
					width: '50vh',
					height: '50vh',
					margin: '0 auto',
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof UserDropdown>;

export const Default: Story = {};
