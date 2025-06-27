import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillTag } from './skillTag';

const meta: Meta<typeof SkillTag> = {
	title: 'Widgets/UserCard/SkillTag',
	component: SkillTag,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillTag>;

export const Primary: Story = {
	args: {
		text: 'Игра на барабанах',
		appearance: 'art',
	},
};
