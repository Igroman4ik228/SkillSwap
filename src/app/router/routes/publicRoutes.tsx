import { ROUTES } from '@/shared';
import type { RouteObject } from 'react-router-dom';

export const PublicRoutes: RouteObject[] = [
	{
		path: ROUTES.SKILLS,
		lazy: () => import('@/pages/skills'),
	},
	{
		path: ROUTES.SKILL,
		lazy: () => import('@/pages/skill'),
	},
];
