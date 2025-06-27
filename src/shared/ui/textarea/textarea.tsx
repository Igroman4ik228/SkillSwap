import { clsx } from 'clsx';
import { useId } from 'react';
import { Icon } from '../icon';
import cls from './textarea.module.scss';
import type { TextareaProps } from './type';

export const Textarea = ({
	title,
	errorText,
	error = false,
	fullWidth = true,
	icon,
	ref,
	className,
	...props
}: TextareaProps) => {
	const id = useId();

	const errorId = `${id}-error`;

	return (
		<div className={clsx(cls.input, className)}>
			{title && (
				<label className={cls.title} htmlFor={id}>
					{title}
				</label>
			)}

			<div className={clsx(cls.fieldWrapper, fullWidth && cls.fullWidth)}>
				<textarea
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
					<Icon Svg={icon.svg} onClick={icon.onClick} className={cls.icon} />
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
