import clsx from 'clsx';
import { Link } from 'react-router-dom';
import cls from '../button.module.scss';
import type { LinkButtonProps } from './type';

export const RouterLinkButton = ({
	appearance = 'primary',
	fullWidth = true,
	ref,
	children,
	className,
	...props
}: LinkButtonProps) => (
	<Link
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
	</Link>
);
