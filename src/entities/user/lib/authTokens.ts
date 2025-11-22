import {
	ACCESS_TOKEN_KEY,
	deleteCookie,
	REFRESH_TOKEN_KEY,
	setCookie,
} from '@/shared';

export const saveAuthTokens = (accessToken: string, refreshToken: string) => {
	setCookie(ACCESS_TOKEN_KEY, accessToken);
	localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const clearAuthTokens = () => {
	deleteCookie(ACCESS_TOKEN_KEY);
	localStorage.removeItem(REFRESH_TOKEN_KEY);
};
