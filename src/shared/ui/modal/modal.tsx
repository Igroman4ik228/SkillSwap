import { useEffect } from 'react';
import clsx from 'clsx';
import { ModalOverlay } from '../modalOverlay';
import styles from './modal.module.scss';

import type { ModalProps } from './type';

export const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		document.addEventListener('keydown', handleEsc);
		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, [onClose]);

	return (
		isOpen && (
			<>
				<div className={clsx(styles.modal, className)}>{children}</div>
				<ModalOverlay onClick={onClose} />
			</>
		)
	);
};
