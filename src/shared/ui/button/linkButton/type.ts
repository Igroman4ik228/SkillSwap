import type { AnchorHTMLAttributes, Ref } from 'react';
import type { TBaseButton } from '../type';

export type LinkButtonProps = TBaseButton &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		ref?: Ref<HTMLAnchorElement>;
	};
