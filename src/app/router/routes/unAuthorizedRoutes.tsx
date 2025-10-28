import { AuthLayout } from '@/app/layouts/authLayout';
import { ROUTES } from '@/shared';
import type { RouteObject } from 'react-router-dom';

export const UnAuthorizedRoutes: RouteObject[] = [
	{
		element: <AuthLayout header={<h1>Вход</h1>} />,
		children: [
			{
				path: ROUTES.LOGIN,
				lazy: () => import('@/pages/login'),
			},
		],
	},
	{
		element: <AuthLayout header={<h1>Регистрация</h1>} />,
		children: [
			{
				path: ROUTES.REGISTER,
				lazy: () => import('@/pages/register'),
			},
		],
	},
];
