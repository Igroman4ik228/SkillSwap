import clsx from 'clsx';
import cls from './stepCounter.module.scss';
import type { StepCounterProps } from './type';

export const StepCounter = ({
	currentStep = 1,
	totalSteps = 3,
}: StepCounterProps) => (
	<div className={cls.stepCounter}>
		<h2 className={cls.title}>
			Шаг {currentStep} из {totalSteps}
		</h2>
		<ul className={cls.steps}>
			{Array.from({ length: totalSteps }).map((_, index) => {
				const stepNumber = index + 1;
				return (
					<li
						key={`step-${stepNumber}`}
						className={clsx(
							cls.step,
							stepNumber <= currentStep && cls.step_active
						)}
					/>
				);
			})}
		</ul>
	</div>
);
