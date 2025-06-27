import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from './passwordInput';

const meta: Meta<typeof PasswordInput> = {
	title: 'Shared/PasswordInput',
	component: PasswordInput,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '460px' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = {
	args: {
		title: 'Пароль',
		placeholder: 'Введите ваш пароль',
		errorText: 'Пароль должен содержать не менее 8 знаков',
	},
};

export const Error: Story = {
	args: {
		title: 'Пароль',
		placeholder: 'Введите ваш пароль',
		errorText: 'Пароль должен содержать не менее 8 знаков',
		error: true,
	},
};
