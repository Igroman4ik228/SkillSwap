import { Preloader, ROUTES } from '@/shared';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '../app';
import { ProtectedRoute } from './protectedRoute/protectedRoute';

const ServerErrorPage = lazy(() => import('@/pages/serverError'));

export const router = createBrowserRouter([
	{
		element: <App />,
		// Глобальные ошибки, НЕ роута (500)
		errorElement: (
			<App>
				<ServerErrorPage />
			</App>
		),
		hydrateFallbackElement: <Preloader />,
		children: [
			// Публичные пути, для всех
			{
				path: ROUTES.SKILLS,
				// Загружаем только, если она открыта
				lazy: () => import('@/pages/skills'),
			},
			{
				path: ROUTES.SKILL,
				lazy: () => import('@/pages/skill'),
			},

			// Защищённые пути, только для авторизованных
			{
				element: <ProtectedRoute authRequired />,
				children: [
					{
						path: ROUTES.PROFILE,
						lazy: async () => {
							const module = await import('@/pages/profile');
							return { Component: module.ProfilePage };
						},
						children: [
							{
								path: '',
								lazy: async () => {
									const module = await import('@/widgets/userDataChangeForm');
									return { Component: module.UserDataChangeForm };
								},
							},
							{
								path: ROUTES.PROFILE_SKILLS,
								lazy: async () => {
									return { Component: () => <div>SKILLS</div> };
								},
							},
							{
								path: ROUTES.PROFILE_FAVORITES,
								lazy: async () => {
									return { Component: () => <div>FAVORITES</div> };
								},
							},
							{
								path: ROUTES.PROFILE_EXCHANGE,
								lazy: async () => {
									return { Component: () => <div>EXCHANGE</div> };
								},
							},
							{
								path: ROUTES.PROFILE_APPLICATIONS,
								lazy: async () => {
									return { Component: () => <div>APPLICATIONS</div> };
								},
							},
						],
					},
				],
			},

			// Защищённые пути, только для НЕавторизованных
			{
				element: <ProtectedRoute />,
				children: [
					{
						path: ROUTES.LOGIN,
						lazy: () => import('@/pages/login'),
					},
					{
						path: ROUTES.REGISTER,
						lazy: () => import('@/pages/register'),
					},
				],
			},

			// Ошибки роута (404)
			{
				path: '*',
				lazy: () => import('@/pages/notFound'),
			},
		],
	},
]);
