import { AuthLayout } from '@/app/layouts/authLayout';
import { ROUTES } from '@/shared';
import { LoginHeader } from '@/widgets/login';
import type { RouteObject } from 'react-router-dom';

export const UnAuthorizedRoutes: RouteObject[] = [
	{
		element: <AuthLayout header={<LoginHeader />} />,
		children: [
			{
				path: ROUTES.LOGIN,
				lazy: () => import('@/pages/loginPage'),
			},
		],
	},
	{
		element: <AuthLayout header={<h1>Регистрация</h1>} />,
		children: [
			{
				path: ROUTES.REGISTER,
				lazy: () => import('@/pages/registerPage'),
			},
		],
	},
];
