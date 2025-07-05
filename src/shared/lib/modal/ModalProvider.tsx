import React, { useState, useCallback } from 'react';
import { ModalOverlay } from '@/shared/ui/modalOverlay';
import { Modal } from '@/shared/ui';
import type { ModalProps } from '@/shared/ui/modal/type';
import type { ModalProviderProps, TModalState } from './types';
import { ModalContext } from './ModalContext';

// оборачивает <App/>
export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [modal, setModal] = useState<TModalState | null>(null);

	// useCallback был использован в паре с useMemo, чтобы функции не создавались заново при открытии/закрытии модалок

	const openModal = useCallback(
		(
			ModalContent: React.ComponentType<ModalProps>,
			contentProps: ModalProps
		) => {
			// тип ComponentType использован потому, что пропы контенту мод.окна передаются в момент рендера модалки (строка 38)
			setModal({ ModalContent, contentProps }); // данная функция будет доступна из любого компонента, в котором будет вызван useContext(ModalContext)
		},
		[]
	);

	const closeModal = useCallback(() => {
		setModal(null);
	}, []);

	const contextValue = React.useMemo(
		() => ({ openModal, closeModal }),
		[openModal, closeModal]
	); // чтобы

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
			{modal && (
				<>
					<ModalOverlay onClick={closeModal} />
					<Modal onClose={closeModal}>
						<modal.ModalContent {...modal.contentProps} />
					</Modal>
				</>
			)}
		</ModalContext.Provider>
	);
};
