import { baseApi } from '@/shared';
import type { TLoginData, TRegisterData, TUser } from '../model';

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation<TUser, TRegisterData>({
			query: (credentials) => ({
				url: 'auth/register',
				method: 'POST',
				body: credentials,
			}),
		}),

		login: builder.mutation<TUser, TLoginData>({
			query: (credentials) => ({
				url: 'auth/login',
				method: 'POST',
				body: credentials,
			}),
		}),

		getMe: builder.query<TUser, void>({
			query: () => ({
				url: 'auth/me',
				method: 'GET',
			}),
		}),

		logout: builder.mutation<void, void>({
			query: () => ({
				url: 'auth/logout',
				method: 'POST',
			}),
		}),
	}),
});
