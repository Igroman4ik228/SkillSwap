import type { Key, ReactNode } from 'react';

export type PortalProps = {
	children: ReactNode;
	container?: Element | DocumentFragment;
	key?: Key;
};
