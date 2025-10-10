import clsx from 'clsx';
import styles from './overlay.module.scss';
import type { OverlayProps } from './type';

export const Overlay = ({ onClick, className }: OverlayProps) => (
	<div
		className={clsx(styles.overlay, className)}
		onClick={onClick}
		role='presentation'
	/>
);
