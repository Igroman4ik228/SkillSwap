import { createContext } from 'react';
import type { TModalContext } from './types';

export const ModalContext = createContext<TModalContext>({
	openModal: () => {},
	closeModal: () => {},
});
