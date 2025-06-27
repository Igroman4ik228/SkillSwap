import type { FC, InputHTMLAttributes, Ref, SVGProps } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	title?: string;
	errorText?: string;
	error?: boolean;
	fullWidth?: boolean;
	icon?: {
		svg: FC<SVGProps<SVGSVGElement>>;
		onClick?: (e?: MouseEvent) => void;
		'aria-label'?: string;
	};
	ref?: Ref<HTMLInputElement>;
};
