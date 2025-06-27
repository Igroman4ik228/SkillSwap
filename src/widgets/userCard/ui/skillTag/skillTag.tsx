import clsx from 'clsx';
import styles from './skillTag.module.scss';
import type { SkillTagProps } from './type';

export const SkillTag = ({
	text,
	appearance,
	className,
	...props
}: SkillTagProps) => (
	<div
		className={clsx(styles.skill, styles[`skill_${appearance}`], className)}
		{...props}
	>
		{text}
	</div>
);
