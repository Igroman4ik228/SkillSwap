import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginExternal } from './loginExternal';

const meta: Meta<typeof LoginExternal> = {
	title: 'Features/Login/LoginExternal',
	component: LoginExternal,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginExternal>;

export const Primary: Story = {};
