import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthRegisterForm } from './authRegisterForm.tsx';

const meta: Meta<typeof AuthRegisterForm> = {
	title: 'Features/Auth/AuthForm',
	component: AuthRegisterForm,
	parameters: {
		docs: {
			description: {
				component:
					'Форма логина с валидацией email и пароля, а также кнопками входа через сторонние сервисы.',
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthRegisterForm>;

export const Default: Story = {
	name: 'По умолчанию',
	render: () => <AuthRegisterForm onSubmitHandler={() => {}} />,
};
