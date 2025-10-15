import { useModal } from '@/shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateOffer } from './createOffer';

const meta: Meta<typeof CreateOffer> = {
	title: 'Widgets/CreateOffer',
	component: CreateOffer,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreateOffer>;

export const Primary: Story = {
	args: {
		onDone: () => console.log('onDone!'),
	},
};

export const Modal: Story = {
	render: () => {
		const { openModal, closeModal } = useModal();

		const handleOpenModal = () => {
			openModal(
				<CreateOffer
					onDone={() => {
						console.log('onDone!');
						closeModal();
					}}
				/>
			);
		};

		return <button onClick={handleOpenModal}>Открыть</button>;
	},
};
