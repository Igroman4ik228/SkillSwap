import type { Meta, StoryObj } from '@storybook/react-vite';
import { Login } from './login';

const meta: Meta<typeof Login> = {
	title: 'Widgets/Login',
	component: Login,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Primary: Story = {};
