import '@/app/styles/index.scss';
import { ModalProvider } from '@/shared';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store';

export const App = () => (
	<Provider store={store}>
		<ModalProvider>
			<RouterProvider router={router} />
		</ModalProvider>
	</Provider>
);
