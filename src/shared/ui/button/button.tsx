import clsx from 'clsx';
import cls from './button.module.scss';
import type { ButtonProps } from './type';

export const Button = ({
	appearance = 'primary',
	fullWidth = true,
	ref,
	type = 'button',
	children,
	className,
	...props
}: ButtonProps) => (
	<button
		className={clsx(
			cls.button,
			cls[`button_${appearance}`],
			fullWidth && cls.fullWidth,
			className
		)}
		ref={ref}
		type={type}
		{...props}
	>
		{children}
	</button>
);
