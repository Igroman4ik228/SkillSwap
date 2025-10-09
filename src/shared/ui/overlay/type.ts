import type { MouseEventHandler } from 'react';

export type OverlayProps = {
	onClick: MouseEventHandler<HTMLElement>;
	className?: string;
};
