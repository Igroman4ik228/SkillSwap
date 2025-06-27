import EditIcon from '@/shared/assets/icons/edit.svg?react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
	title: 'Shared/Input',
	component: Input,
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
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
	args: {
		title: 'Имя',
		placeholder: 'Введите имя',
		errorText: 'Имя должно содержать не менее 8 знаков',
	},
};

export const Error: Story = {
	args: {
		title: 'Имя',
		placeholder: 'Введите имя',
		errorText: 'Имя должно содержать не менее 8 знаков',
		error: true,
	},
};

export const WithIcon: Story = {
	args: {
		title: 'Имя',
		placeholder: 'Введите имя',
		errorText: 'Имя должно содержать не менее 8 знаков',
		icon: {
			svg: EditIcon,
			onClick: () => {},
		},
	},
};
