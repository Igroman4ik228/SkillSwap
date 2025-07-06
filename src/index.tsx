import { router, store } from '@/app';
import '@/app/styles/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ModalProvider } from './shared/lib';

const container = document.getElementById('root'!) as HTMLElement;
const root = createRoot(container!);

root.render(
	<StrictMode>
		<Provider store={store}>
			<ModalProvider>
				<RouterProvider router={router} />
			</ModalProvider>
		</Provider>
	</StrictMode>
);
