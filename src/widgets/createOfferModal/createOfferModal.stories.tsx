import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateOfferModal } from './createOfferModal';

const meta: Meta<typeof CreateOfferModal> = {
	title: 'Widgets/CreateOfferModal',
	component: CreateOfferModal,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreateOfferModal>;

export const Opened: Story = {
	args: {
		isOpen: true,
	},
};
