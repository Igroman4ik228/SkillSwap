import { ROUTES } from '@/shared';
import type { RouteObject } from 'react-router-dom';

export const PublicRoutes: RouteObject[] = [
	{
		path: ROUTES.SKILLS,
		lazy: () => import('@/pages/skillsPage'),
	},
	{
		path: ROUTES.SKILL,
		lazy: () => import('@/pages/skillPage'),
	},
];
