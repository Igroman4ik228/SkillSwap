import type { FC, TextareaHTMLAttributes, Ref, SVGProps } from 'react';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	title?: string;
	errorText?: string;
	error?: boolean;
	fullWidth?: boolean;
	icon?: {
		svg: FC<SVGProps<SVGSVGElement>>;
		onClick?: () => void;
	};
	ref?: Ref<HTMLTextAreaElement>;
};
