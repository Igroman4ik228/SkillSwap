import React from 'react';
import type { TModalContextAPI } from './types';

// в контексте будем хранить ссылки на методы открытия/закрытия модалки

export const ModalContext = React.createContext<TModalContextAPI>({
	openModal: () => {},
	closeModal: () => {},
});

// реализация методов открытия/закрытия будет в ModalProvider.
// Он будет оборачивать <App/> и содержать реализацию openModal и closeModal.
// Эта реализация в свою очередь будет передана контексту через value
