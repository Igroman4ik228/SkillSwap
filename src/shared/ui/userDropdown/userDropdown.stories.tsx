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
					height: '50vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					border: '1px solid #ccc',
				}}
			>
				<div
					style={{
						width: '100%',
						position: 'relative',
					}}
				>
					<Story />
				</div>
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof UserDropdown>;

export const Default: Story = {};
