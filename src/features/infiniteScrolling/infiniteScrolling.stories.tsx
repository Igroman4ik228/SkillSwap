import type { TUsers } from '@/entities';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfiniteScrolling } from './infiniteScrolling';

const mockCards: TUsers[] = [
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
];

const meta: Meta<typeof InfiniteScrolling> = {
	title: 'Features/InfiniteScrolling',
	component: InfiniteScrolling,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InfiniteScrolling>;

export const Scroll: Story = {
	args: {
		fetchCards: async (_page: number, _pageSize: number) => {
			await new Promise<void>((resolve) => {
				setTimeout(resolve, 1000);
			});
			return mockCards;
		},
		pageSize: 2,
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '375px', margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
};
