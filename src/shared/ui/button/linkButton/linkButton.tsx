import clsx from 'clsx';
import cls from '../button.module.scss';
import type { LinkButtonProps } from './type';

export const LinkButton = ({
	appearance = 'primary',
	fullWidth = true,
	ref,
	children,
	className,
	...props
}: LinkButtonProps) => (
	<a
		className={clsx(
			cls.button,
			cls[`button_${appearance}`],
			fullWidth && cls.fullWidth,
			className
		)}
		ref={ref}
		{...props}
	>
		{children}
	</a>
);
