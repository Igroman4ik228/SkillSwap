import { useModal } from '@/shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginYourAccount } from './loginYourAccount';

const meta: Meta<typeof LoginYourAccount> = {
	title: 'Widgets/LoginYourAccount',
	component: LoginYourAccount,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginYourAccount>;

export const Primary: Story = {
	args: {
		onCancel: () => console.log('onCancel'),
		onSignIn: () => console.log('onSignIn'),
	},
};

export const Modal: Story = {
	render: () => {
		const { openModal, closeModal } = useModal();

		const handleOpenModal = () => {
			openModal(
				<LoginYourAccount
					onCancel={() => {
						console.log('onCancel');
						closeModal();
					}}
					onSignIn={() => {
						console.log('onSignIn');
						closeModal();
					}}
				/>
			);
		};

		return <button onClick={handleOpenModal}>Открыть</button>;
	},
};
