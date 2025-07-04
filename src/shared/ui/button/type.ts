import type { ButtonHTMLAttributes, Ref } from 'react';

export type TBaseButton = {
	appearance?: 'primary' | 'secondary' | 'tertiary';
	fullWidth?: boolean;
};

export type ButtonProps = TBaseButton &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		ref?: Ref<HTMLButtonElement>;
	};
