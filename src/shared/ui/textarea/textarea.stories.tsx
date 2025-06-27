import EditIcon from '@/shared/assets/icons/edit.svg?react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
	title: 'Shared/Textarea',
	component: Textarea,
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
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
	args: {
		title: 'О себе',
		placeholder: 'Напишите о себе',
		errorText: 'Имя должно содержать не менее 8 знаков',
	},
};

export const Error: Story = {
	args: {
		title: 'О себе',
		placeholder: 'Напишите о себе',
		errorText: 'Обязательное поле',
		error: true,
	},
};

export const WithIcon: Story = {
	args: {
		title: 'О себе',
		placeholder: 'Напишите о себе',
		errorText: 'Обязательное поле',
		icon: {
			svg: EditIcon,
			onClick: () => {},
		},
	},
};
