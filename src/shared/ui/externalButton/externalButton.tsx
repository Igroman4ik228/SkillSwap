import clsx from 'clsx';
import cls from './externalButton.module.scss';
import type { ExternalButtonProps } from './type';
import { Button } from '../button';

export const ExternalButton = ({
	icon,
	text,
	className,
	...props
}: ExternalButtonProps) => {
	return (
		<Button
			appearance='secondary'
			className={clsx(cls.externalButton, className)}
			{...props}
		>
			{icon && icon} <span>{text}</span>
		</Button>
	);
};
