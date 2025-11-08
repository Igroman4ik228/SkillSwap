import { configureStore } from '@reduxjs/toolkit';
import type { Parameters } from '@storybook/react-vite';
import { type ComponentType } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { rootReducer, type RootState } from '@/app/store';
import { ModalProvider } from '@/shared';

export type TCustomParameters = {
	initialState?: RootState;
};

export const StoreDecorator =
	() =>
	(Story: ComponentType, { parameters }: Parameters) => {
		const { initialState }: TCustomParameters = parameters;

		const store = configureStore({
			reducer: rootReducer,
			preloadedState: initialState,
		});

		return (
			<Provider store={store}>
				<Story />
			</Provider>
		);
	};

export const MemoryRouteDecorator = () => (Story: ComponentType) => {
	return (
		<MemoryRouter>
			<Story />
		</MemoryRouter>
	);
};

export const ModalDecorator = () => (Story: ComponentType) => {
	if (!document.getElementById('modal')) {
		const modalRoot = document.createElement('div');
		modalRoot.id = 'modal';
		document.body.appendChild(modalRoot);
	}

	return (
		<ModalProvider>
			<Story />
		</ModalProvider>
	);
};
