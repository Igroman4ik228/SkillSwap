import type { ReactNode } from 'react';
import type { ButtonProps } from '../button/type';

export type ExternalButtonProps = Omit<ButtonProps, 'children'> & {
	icon?: ReactNode;
	text: string;
};
