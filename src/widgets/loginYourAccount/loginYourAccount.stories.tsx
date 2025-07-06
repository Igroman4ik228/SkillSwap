import { useModal } from '@/shared/lib';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginYourAccount } from './loginYourAccount';

const meta: Meta<typeof LoginYourAccount> = {
	title: 'Widgets/LoginYourAccountModal',
	component: LoginYourAccount,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginYourAccount>;

export const Opened: Story = {
	render: () => {
		const { openModal, closeModal } = useModal();

		return (
			<button
				onClick={() => openModal(<LoginYourAccount onClose={closeModal} />)}
			>
				Открыть
			</button>
		);
	},
};
