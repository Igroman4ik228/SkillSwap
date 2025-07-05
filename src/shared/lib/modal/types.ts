import type { ModalProps } from '@/shared/ui/modal/type';

export type TModalContextAPI = {
	// тип данных, помещаемых в контекст
	// в данном случае в контексте апишка открытия/закрытия модального окна
	openModal: (
		ModalContent: React.ComponentType<ModalProps>,
		props: ModalProps
	) => void;
	closeModal: () => void;
};

export type TModalState = {
	// тип стейта открытого модального окна
	ModalContent: React.ComponentType<ModalProps>; // ModalContent с большой буквы, т.к. содержит компонент
	contentProps: ModalProps; // пропсы для ModalContent
};

export type ModalProviderProps = {
	// тип провайдера, оборачивающего <App/>
	children: React.ReactNode;
};
