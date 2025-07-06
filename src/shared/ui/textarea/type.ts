import type { Ref, TextareaHTMLAttributes } from 'react';
import type { IconProps } from '../icon';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	title?: string;
	errorText?: string;
	error?: boolean;
	fullWidth?: boolean;
	icon?: IconProps;
	ref?: Ref<HTMLTextAreaElement>;
};
