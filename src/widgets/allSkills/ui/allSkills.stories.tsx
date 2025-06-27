import type { Meta, StoryObj } from '@storybook/react-vite';
import { AllSkills } from './allSkills';
import { SkillSection } from './skillSection';
import { SKILL_SECTIONS } from '../model/data';

const meta: Meta<typeof AllSkills> = {
	title: 'Widgets/AllSkills',
	component: AllSkills,
};

export default meta;
type Story = StoryObj<typeof AllSkills>;

export const Business: StoryObj = {
	render: () => <SkillSection {...SKILL_SECTIONS[0]} />,
};

export const Art: StoryObj = {
	render: () => <SkillSection {...SKILL_SECTIONS[1]} />,
};

export const Languages: StoryObj = {
	render: () => <SkillSection {...SKILL_SECTIONS[2]} />,
};

export const Education: StoryObj = {
	render: () => <SkillSection {...SKILL_SECTIONS[3]} />,
};

export const Home: StoryObj = {
	render: () => <SkillSection {...SKILL_SECTIONS[4]} />,
};

export const Lifestyle: StoryObj = {
	render: () => <SkillSection {...SKILL_SECTIONS[5]} />,
};

export const All: Story = {
	render: () => <AllSkills />,
};
