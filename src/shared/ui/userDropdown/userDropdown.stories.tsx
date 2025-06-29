import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserDropdown } from './userDropdown';

const meta: Meta<typeof UserDropdown> = {
	title: 'shared/UserDropdown',
	component: UserDropdown,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
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
				<div
					style={{
						position: 'relative', // сбрасываем влияние absolute у дропдауна
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

export const Default: Story = {
	render: () => <UserDropdown />,
};
