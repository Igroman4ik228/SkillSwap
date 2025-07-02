import type { Ref } from 'react';
import type { LinkProps } from 'react-router-dom';
import type { TBaseButton } from '../type';

export type LinkButtonProps = TBaseButton &
	LinkProps & {
		ref?: Ref<HTMLAnchorElement>;
	};
