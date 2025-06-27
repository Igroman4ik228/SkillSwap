export const ROUTES = {
	SKILLS: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	PROFILE: '/profile',
	PROFILE_SKILLS: '/profile/skills',
	PROFILE_FAVORITES: '/profile/favorites',
	PROFILE_EXCHANGE: '/profile/exchange',
	PROFILE_APPLICATIONS: '/profile/applications',
	SKILL: '/skills/:skillId',
	SKILL_SUCCESS: '/skills/success',
} as const;

export type PathParams = {
	[ROUTES.SKILL]: {
		skillId?: string;
	};
};

// Типизированны переход по пути с динамическим параметром
// navigate(generatePath(ROUTES.SKILL, { skillId: 1 }));

// Использование типизированного useParams
// const params = useParams<PathParams[typeof ROUTES.SKILL]>();
// params.skillId - динамический параметр

declare module 'react-router-dom' {
	interface Register {
		params: PathParams;
	}
}
