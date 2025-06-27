import type { InputHTMLAttributes, Ref } from 'react';

export type PasswordInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type'
> & {
	title?: string;
	errorText?: string;
	error?: boolean;
	fullWidth?: boolean;
	ref?: Ref<HTMLInputElement>;
};
