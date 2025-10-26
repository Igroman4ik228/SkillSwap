import type { Meta, StoryObj } from '@storybook/react-vite';
import LightBulbIcon from '@/shared/assets/icons/light-bulb.svg?react';
import { Welcome } from './welcome';

const meta: Meta<typeof Welcome> = {
	title: 'shared/Welcome',
	component: Welcome,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div
				style={{
					width: 556,
				}}
			>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Default: Story = {
	args: {
		image: <LightBulbIcon />,
		title: 'С возвращением в SkillSwap!',
		text: 'Обменивайтесь знаниями и навыками с другими людьми',
	},
};
