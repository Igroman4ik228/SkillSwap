import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './dropdown';
import type { DropdownOption } from './type';

const MultipleDropdownOptions: DropdownOption[] = [
	{ label: 'Английский', value: '1' },
	{ label: 'Французский', value: '2' },
	{ label: 'Испанский', value: '3' },
	{ label: 'Итальянский', value: '4' },
	{ label: 'Русский', value: '5' },
	{ label: 'Португальский', value: '6' },
	{ label: 'Арабский', value: '7' },
	{ label: 'Турецкий', value: '8' },
	{ label: 'Корейский', value: '9' },
	{ label: 'Греческий', value: '10' },
	{ label: 'Голландский', value: '11' },
	{ label: 'Шведский', value: '12' },
	{ label: 'Датский', value: '13' },
	{ label: 'Норвежский', value: '14' },
];

const SingleDropdownOptions: DropdownOption[] = [
	{ label: 'Ростов-на-Дону', value: '1' },
	{ label: 'Москва', value: '2' },
	{ label: 'Санкт-Петербург', value: '3' },
	{ label: 'Новосибирск', value: '4' },
	{ label: 'Екатеринбург', value: '5' },
	{ label: 'Казань', value: '6' },
	{ label: 'Нижний Новгород', value: '7' },
	{ label: 'Челябинск', value: '8' },
	{ label: 'Самара', value: '9' },
];

const meta: Meta<typeof Dropdown> = {
	title: 'shared/Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ width: '436px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Single: Story = {
	args: {
		widthVariant: true,
		isMultiple: false,
		value: SingleDropdownOptions[0],
		onChange: () => {},
		options: SingleDropdownOptions,
		title: 'Город',
		placeholder: 'Не указан',
		error: false,
		errorText: 'Выберите город',
	},
};

export const Multiple: Story = {
	args: {
		widthVariant: false,
		isMultiple: true,
		value: [MultipleDropdownOptions[1], MultipleDropdownOptions[2]],
		onChange: () => {},
		options: MultipleDropdownOptions,
		title: 'Языки',
		placeholder: 'Выберите языки',
	},
};

export const SingleError: Story = {
	args: {
		widthVariant: true,
		isMultiple: false,
		value: SingleDropdownOptions[0],
		onChange: () => {},
		options: SingleDropdownOptions,
		title: 'Город',
		placeholder: 'Не указан',
		error: true,
		errorText: 'Выберите город',
	},
};
