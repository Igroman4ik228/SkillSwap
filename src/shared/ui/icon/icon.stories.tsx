import LogoIcon from '@/shared/assets/icons/logo.svg?react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
	title: 'Shared/Icon',
	component: Icon,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
	args: {
		Svg: LogoIcon,
	},
};

export const Clickable: Story = {
	args: {
		Svg: LogoIcon,
		onClick: () => {},
	},
};
