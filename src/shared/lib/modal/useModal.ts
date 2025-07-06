import { useContext } from 'react';
import { ModalContext } from './modalContext';

export const useModal = () => useContext(ModalContext);
