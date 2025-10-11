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
	const SvgProps = {
		className: clsx(!onClick && className),
		style: { height, width },
		...props,
	};

	if (!onClick) return <Svg {...SvgProps} />;

	return (
		<button
			className={clsx(cls.button, className)}
			onClick={onClick}
			type='button'
		>
			<Svg {...SvgProps} />
		</button>
	);
};
