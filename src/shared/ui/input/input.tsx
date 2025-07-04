import { clsx } from 'clsx';
import { useId } from 'react';
import { Icon } from '../icon';
import cls from './input.module.scss';
import type { InputProps } from './type';

export const Input = ({
	title,
	errorText,
	error = false,
	fullWidth = true,
	icon,
	ref,
	className,
	...props
}: InputProps) => {
	const id = useId();

	const errorId = `${id}-error`;

	return (
		<div
			className={clsx(cls.input, fullWidth && cls.input_fullWidth, className)}
		>
			{title && (
				<label className={cls.title} htmlFor={id}>
					{title}
				</label>
			)}

			<div className={cls.fieldWrapper}>
				<input
					className={clsx(
						cls.field,
						error && cls.field_error,
						icon && cls.field_withIcon
					)}
					aria-invalid={error}
					aria-describedby={error ? errorId : undefined}
					ref={ref}
					id={id}
					{...props}
				/>
				{icon && (
					<Icon
						Svg={icon.Svg}
						onClick={icon.onClick}
						className={cls.icon}
						aria-label={icon['aria-label']}
					/>
				)}
			</div>
			{errorText && (
				<p
					className={clsx(cls.errorText, error && cls.errorText_active)}
					role='alert'
					id={errorId}
				>
					{errorText}
				</p>
			)}
		</div>
	);
};
