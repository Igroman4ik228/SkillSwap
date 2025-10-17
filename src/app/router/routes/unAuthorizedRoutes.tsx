import { ROUTES } from '@/shared';
import type { RouteObject } from 'react-router-dom';

export const UnAuthorizedRoutes: RouteObject[] = [
	{
		path: ROUTES.LOGIN,
		lazy: () => import('@/pages/login'),
	},
	{
		path: ROUTES.REGISTER,
		lazy: () => import('@/pages/register'),
	},
];
