import styles from './modalOverlay.module.scss';

export const ModalOverlay = ({ onClick }: { onClick: () => void }) => (
	<div className={styles.overlay} onClick={onClick} role='presentation' />
);
