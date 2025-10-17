import { Preloader } from '@/shared';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { ProtectedRoute } from './protectedRoute/protectedRoute';
import { AuthorizedRoutes, PublicRoutes, UnAuthorizedRoutes } from './routes';

const ServerErrorPage = lazy(() => import('@/pages/serverError'));

export const router = createBrowserRouter([
	{
		element: <MainLayout />,

		// Глобальные ошибки, НЕ роута (500)
		errorElement: (
			<MainLayout>
				<ServerErrorPage />
			</MainLayout>
		),

		hydrateFallbackElement: <Preloader />,

		children: [
			// Публичные пути, для всех
			...PublicRoutes,

			// Защищённые пути
			// Только для авторизованных
			{
				element: <ProtectedRoute authRequired />,
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
				lazy: () => import('@/pages/notFound'),
			},
		],
	},
]);
