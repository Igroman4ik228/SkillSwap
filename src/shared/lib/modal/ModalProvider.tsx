import { Modal } from '@/shared/ui';
import { ModalOverlay } from '@/shared/ui/modalOverlay';
import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ModalContext } from './modalContext';
import type { ModalProviderProps } from './types';

export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [modal, setModal] = useState<ReactNode | null>(null);

	const openModal = useCallback((modalChildren: ReactNode) => {
		setModal(modalChildren);
	}, []);

	const closeModal = useCallback(() => {
		setModal(null);
	}, []);

	const contextValue = useMemo(
		() => ({ openModal, closeModal }),
		[openModal, closeModal]
	);

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
			{modal && (
				<>
					<ModalOverlay onClick={closeModal} />
					<Modal onClose={closeModal}>{modal}</Modal>
				</>
			)}
		</ModalContext.Provider>
	);
};
