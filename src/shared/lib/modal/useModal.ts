import React from 'react';
import { ModalContext } from './ModalContext';

export const useModal = () => React.useContext(ModalContext); // хук, возвращающий методы openModal(), closeModal()
// его юзаем в тех компонентах, в которых есть события, вызывающие открытие модалки.
// Прямо в обработчике события вызываем openModal(someModalComponent, someModalComponentProps).
// В результате модалка будет отрендерена поверх document через портал.

// Логика портала будет описана в компоненте <Modal>: shared/ui/modal/. Во втором пулл реквесте.
