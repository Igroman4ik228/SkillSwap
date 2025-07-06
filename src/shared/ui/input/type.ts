import type { InputHTMLAttributes, Ref } from 'react';
import type { IconProps } from '../icon';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	title?: string;
	errorText?: string;
	error?: boolean;
	fullWidth?: boolean;
	icon?: IconProps;
	ref?: Ref<HTMLInputElement>;
};
