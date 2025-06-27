import type { ButtonHTMLAttributes, Ref } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	appearance?: 'primary' | 'secondary' | 'tertiary';
	fullWidth?: boolean;
	ref?: Ref<HTMLButtonElement>;
};
