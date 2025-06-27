import type { TUsers } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserCards } from './userCards';

const meta: Meta<typeof UserCards> = {
	component: UserCards,
	title: 'Widgets/UserCards',
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 1020 }}>
				<Story />
			</div>
		),
	],
};
export default meta;

type Story = StoryObj<typeof UserCards>;

const mockUsers: TUsers[] = [
	{
		id: '85dd190e-ffcf-49df-b883-d16d7f31b457',
		name: 'Михаил',
		city: 'Ростов-на-Дону',
		bornDate: '1998-01-01',
		avatar: 'https://randomuser.me/api/portraits/men/89.jpg',
		teach: 'Управление командой',
		learn: ['Проектное управление', 'Продажи и переговоры'],
		isFavorite: false,
		isExchangeRequested: true,
		description:
			'Опытный руководитель, готов делиться знаниями. Ищу новые навыки для профессионального роста.',
	},
	{
		id: 'a8544a6f-d946-4fd0-9ccf-4e324d32f4ad',
		name: 'Полина',
		city: 'Казань',
		bornDate: '1965-01-01',
		avatar: 'https://randomuser.me/api/portraits/women/58.jpg',
		teach: 'Когнитивные техники',
		learn: ['Арт-терапия', 'Проектное управление'],
		isFavorite: false,
		isExchangeRequested: false,
		description:
			'Специалист по когнитивным техникам. Хочу освоить арт-терапию и управление проектами.',
	},
	{
		id: 'a2a2abab-5c17-43f3-a7d1-980b63ce5912',
		name: 'Дмитрий',
		city: 'Нижний Новгород',
		bornDate: '1990-01-01',
		avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
		teach: 'Питание и ЗОЖ',
		learn: ['Английский', 'Сон и восстановление', 'Личный бренд'],
		isFavorite: false,
		isExchangeRequested: false,
		description:
			'Эксперт по здоровому образу жизни. Хочу улучшить английский и личный бренд.',
	},
];

export const Primary: Story = {
	args: {
		users: mockUsers,
	},
};
