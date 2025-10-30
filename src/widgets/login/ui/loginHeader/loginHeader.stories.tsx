import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginHeader } from './loginHeader';

const meta: Meta<typeof LoginHeader> = {
	title: 'Widgets/Login/LoginHeader',
	component: LoginHeader,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginHeader>;

export const Primary: Story = {};
