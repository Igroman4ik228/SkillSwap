import { useModal } from '@/shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfferedExchange } from './offeredExchange';

const meta: Meta<typeof OfferedExchange> = {
	title: 'Widgets/OfferedExchange',
	component: OfferedExchange,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OfferedExchange>;

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
				<OfferedExchange
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
