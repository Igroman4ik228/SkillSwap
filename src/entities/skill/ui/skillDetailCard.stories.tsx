import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillDetailCard } from './skillDetailCard';

const meta: Meta<typeof SkillDetailCard> = {
	title: 'entities/Skill/SkillDetailCard',
	component: SkillDetailCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillDetailCard>;

export const Primary: Story = {};
