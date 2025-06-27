import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfferedExchangeModal } from './offeredExchangeModal';

const meta: Meta<typeof OfferedExchangeModal> = {
	title: 'Widgets/OfferedExchangeModal',
	component: OfferedExchangeModal,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: 1368, height: 500, margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof OfferedExchangeModal>;

export const Opened: Story = {
	args: {
		isOpen: true,
	},
};
