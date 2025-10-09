import { Modal } from '@/shared/ui';
import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ModalContext } from './modalContext';
import type { ModalProviderProps } from './types';

export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

	const openModal = useCallback((content: ReactNode) => {
		setModalChildren(content);
	}, []);

	const closeModal = useCallback(() => setModalChildren(null), []);

	const contextValue = useMemo(
		() => ({ openModal, closeModal }),
		[openModal, closeModal]
	);

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
			{!!modalChildren && <Modal onClose={closeModal}>{modalChildren}</Modal>}
		</ModalContext.Provider>
	);
};
