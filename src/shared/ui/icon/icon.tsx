import clsx from 'clsx';
import cls from './icon.module.scss';
import type { IconProps } from './type';

export const Icon = ({
	Svg,
	onClick,
	className,
	width,
	height,
	...props
}: IconProps) => {
	const icon = (
		<Svg
			{...(width ? { width } : {})}
			{...(height ? { height } : {})}
			{...props}
		/>
	);

	if (onClick) {
		return (
			<button
				style={{ height, width }}
				className={clsx(cls.button, className)}
				onClick={onClick}
				type='button'
			>
				{icon}
			</button>
		);
	}

	return icon;
};
