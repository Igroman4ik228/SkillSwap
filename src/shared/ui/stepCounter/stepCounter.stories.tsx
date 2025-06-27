import { Button } from '@/shared';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { StepCounter } from './stepCounter';

const meta: Meta<typeof StepCounter> = {
	title: 'Shared/StepCounter',
	component: StepCounter,
	parameters: {
		docs: {
			description: {
				component: 'Счетчик этапов регистрации',
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StepCounter>;

export const Default: Story = {
	name: 'По умолчанию',
};

export const WithButton: StoryObj = {
	name: 'С кнопкой переключения шага',
	render: () => {
		const [step, setStep] = useState(1);
		const totalSteps = 3;

		const handleNext = () => {
			setStep((prev) => (prev < totalSteps ? prev + 1 : 1));
		};
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
					alignItems: 'center',
				}}
			>
				<StepCounter currentStep={step} totalSteps={totalSteps} />
				<Button onClick={handleNext}>Следующий шаг</Button>
			</div>
		);
	},
};
