import clsx from 'clsx';
import cls from './skillTag.module.scss';
import type { SkillTagProps } from './type';

export const SkillTag = ({
	text,
	appearance,
	className,
	...props
}: SkillTagProps) => (
	<div
		className={clsx(cls.skill, cls[`skill_${appearance}`], className)}
		{...props}
	>
		{text}
	</div>
);
