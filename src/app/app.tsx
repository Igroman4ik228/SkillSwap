import '@/app/styles/index.scss';
import { checkUserAuth } from '@/entities';
import { ModalProvider } from '@/shared';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store';

export const App = () => {
	// Load initial  data
	useEffect(() => {
		store.dispatch(checkUserAuth());
	}, []);

	return (
		<Provider store={store}>
			<ModalProvider>
				<RouterProvider router={router} />
			</ModalProvider>
		</Provider>
	);
};
