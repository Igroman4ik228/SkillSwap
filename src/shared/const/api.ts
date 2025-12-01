export const AUTH_API_PATHS = {
	REGISTER: 'auth/register',
	LOGIN: 'auth/login',
	LOGOUT: 'auth/logout',
	REFRESH_TOKEN: 'auth/refresh',
	FORGOT_PASSWORD: 'auth/forgot-password',
	RESET_PASSWORD: 'auth/reset-password',
} as const;

// Текущий пользователь (управление своим профилем)
export const ME_API_PATHS = {
	ME: 'me',
	SKILLS: 'me/skills',
	SKILL_BY_ID: (skillId: string | number) => `me/skills/${skillId}` as const,

	FAVORITES: 'me/favorites',
	FAVORITE_BY_ID: (favoriteId: string | number) =>
		`me/favorites/${favoriteId}` as const,

	SWAPS: 'me/swaps',
	SWAP_BY_ID: (swapId: string | number) => `me/swaps/${swapId}` as const,

	EXCHANGE_REQUESTS: 'me/exchange-requests',
	EXCHANGE_REQUESTS_BY_ID: (requestId: string | number) =>
		`me/exchange-requests/${requestId}` as const,
} as const;

// TODO: Сделать отдельный путь под подробную информацию о навыке?
export const SKILLS_API_PATHS = {
	SKILLS: 'skills',
	SKILL_BY_ID: (skillId: string | number) => `skills/${skillId}` as const,
} as const;

// Публичные данные пользователей
export const USERS_API_PATHS = {
	USERS: 'users',
	USER_BY_ID: (userId: string | number) => `users/${userId}` as const,

	SKILLS: (userId: string | number) => `users/${userId}/skills`,
	SKILL_BY_ID: (userId: string | number, skillId: string | number) =>
		`users/${userId}/skills/${skillId}`,
} as const;
