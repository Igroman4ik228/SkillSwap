import type { ReactNode } from 'react';

export type TModalContext = {
	openModal: (modalChildren: ReactNode) => void;
	closeModal: () => void;
};

export type ModalProviderProps = {
	children: ReactNode;
};
