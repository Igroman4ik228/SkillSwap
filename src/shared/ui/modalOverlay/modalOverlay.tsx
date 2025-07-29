import styles from './modalOverlay.module.scss';
import type { ModalOverlayProps } from './type';

export const ModalOverlay = ({ onClick }: ModalOverlayProps) => (
	<div className={styles.overlay} onClick={onClick} role='presentation' />
);
