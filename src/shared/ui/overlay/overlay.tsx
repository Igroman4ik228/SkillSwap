import clsx from 'clsx';
import cls from './overlay.module.scss';
import type { OverlayProps } from './type';

export const Overlay = ({ onClick, className }: OverlayProps) => (
	<div
		className={clsx(cls.overlay, className)}
		onClick={onClick}
		role='presentation'
	/>
);
