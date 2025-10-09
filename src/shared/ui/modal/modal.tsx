import clsx from 'clsx';
import { useEffect } from 'react';
import { Overlay } from '../overlay';
import { Portal } from '../portal';
import cls from './modal.module.scss';
import type { ModalProps } from './type';

export const Modal = ({ onClose, children, className }: ModalProps) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		document.addEventListener('keydown', handleEsc);
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleEsc);
		};
	}, [onClose]);

	return (
		<Portal container={document.getElementById('modal') ?? undefined}>
			<div
				className={clsx(cls.modal, className)}
				role='dialog'
				aria-modal='true'
			>
				<div className={cls.content}>{children}</div>
				<Overlay onClick={onClose} />
			</div>
		</Portal>
	);
};
