import clsx from 'clsx';
import cls from './stepCounter.module.scss';
import type { TStepCounterProp } from './type';

export const StepCounter = ({
	currentStep = 1,
	totalSteps = 3,
}: TStepCounterProp) => {
	return (
		<div className={cls.counterWrapper}>
			<h2 className={cls.partTitle}>
				Шаг <span>{currentStep}</span> из <span>{totalSteps}</span>
			</h2>
			<div className={cls.stepsWrapper}>
				{Array.from({ length: totalSteps }).map((_, index) => {
					const stepNumber = index + 1;
					return (
						<span
							key={`step-${stepNumber}`}
							className={clsx(
								cls.part,
								stepNumber <= currentStep && cls.stepActive
							)}
						/>
					);
				})}
			</div>
		</div>
	);
};
