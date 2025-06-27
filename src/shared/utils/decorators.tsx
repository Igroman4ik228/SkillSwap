import { configureStore } from '@reduxjs/toolkit';
import { type ComponentType } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import type { DeepPartial } from './types';
// No FSD
import { rootReducer } from '../../app/store';

export const StoreDecorator =
	(initialState: DeepPartial<RootState> = {}) =>
	(Story: ComponentType) => {
		const store = configureStore({
			reducer: rootReducer,
			preloadedState: initialState as RootState,
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
