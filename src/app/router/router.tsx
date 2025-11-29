import { Preloader } from '@/shared';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { ProtectedRoute } from './protectedRoute/protectedRoute';
import { AuthorizedRoutes, PublicRoutes, UnAuthorizedRoutes } from './routes';

const ErrorPage = lazy(() => import('@/pages/errorPage'));

export const router = createBrowserRouter([
	{
		element: <MainLayout />,

		// Глобальные ошибки, НЕ роута (500)
		errorElement: (
			<MainLayout>
				<ErrorPage statusCode={500} />
			</MainLayout>
		),

		hydrateFallbackElement: <Preloader />,

		children: [
			// Публичные пути, для всех
			...PublicRoutes,

			//* Защищённые пути

			// Только для авторизованных
			{
				element: <ProtectedRoute isPrivate />,
				children: [...AuthorizedRoutes],
			},

			// Только для НЕавторизованных
			{
				element: <ProtectedRoute />,
				children: [...UnAuthorizedRoutes],
			},

			// Ошибки роута (404)
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
