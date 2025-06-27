import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillList } from './skillList';

const meta: Meta<typeof SkillList> = {
	title: 'Widgets/UserCard/SkillList',
	component: SkillList,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillList>;

export const Primary: Story = {
	args: {
		items: ['Игра на барабанах', 'Тайм менеджмент', 'Медитация'],
	},
};

export const LimitedWidth: Story = {
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
	args: {
		items: ['Игра на барабанах', 'Тайм менеджмент', 'Медитация'],
	},
};
