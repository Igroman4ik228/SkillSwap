import EyeSlashIcon from '@/shared/assets/icons/eye-slash.svg?react';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import { useState } from 'react';
import { Input } from '../input';
import type { PasswordInputProps } from './type';

export const PasswordInput = ({
	title,
	errorText,
	error = false,
	fullWidth = true,
	ref,
	className,
	...props
}: PasswordInputProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const inputType = isPasswordVisible ? 'text' : 'password';

	return (
		<Input
			title={title}
			errorText={errorText}
			error={error}
			fullWidth={fullWidth}
			ref={ref}
			className={className}
			type={inputType}
			icon={{
				svg: isPasswordVisible ? EyeSlashIcon : EyeIcon,
				onClick: togglePasswordVisibility,
			}}
			{...props}
		/>
	);
};
