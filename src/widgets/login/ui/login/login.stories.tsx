import type { Meta, StoryObj } from '@storybook/react-vite';
import { Login } from './login';

const meta: Meta<typeof Login> = {
	title: 'Widgets/Login/Login',
	component: Login,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: 436 }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Primary: Story = {};
