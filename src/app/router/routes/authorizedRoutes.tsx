import { ProfileLayout } from '@/app/layouts';
import { ROUTES } from '@/shared';
import type { RouteObject } from 'react-router-dom';

export const AuthorizedRoutes: RouteObject[] = [
	{
		element: <ProfileLayout />,
		children: [
			{
				path: ROUTES.PROFILE,
				lazy: () => import('@/pages/profile'),
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
];
