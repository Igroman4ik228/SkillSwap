import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginForm } from './loginForm';

const meta: Meta<typeof LoginForm> = {
	title: 'Features/Login/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
