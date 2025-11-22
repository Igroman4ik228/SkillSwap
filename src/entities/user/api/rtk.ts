import { baseApi, type TServerResponse } from '@/shared';
import type { TLoginData, TRegisterData, TUser } from '../model';
import { clearAuthTokens, saveAuthTokens } from '../lib';

type TAuthResponse = TServerResponse<{
	refreshToken: string;
	accessToken: string;
	user: TUser;
}>;

// Тестовое API

const TEST_DELAY = 500;

export const registerUserApi = (
	data: TRegisterData
): Promise<TAuthResponse> => {
	console.log(data);
	return new Promise((resolve) => {
		setTimeout(
			() =>
				resolve({
					success: true,
					refreshToken: 'testRefreshToken',
					accessToken: 'testAccessToken',
					user: {
						id: '1',
						email: 'Mariia@gmail.com',
						name: 'Мария',
						city: 'Москва',
						gender: 'Женский',
						bornDate: '28.10.1995',
						avatar: 'images/user-avatar.jpg',
						description:
							'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме. Всегда готова пообщаться и обменяться чем‑то интересным!',
					},
				}),
			TEST_DELAY
		);
	});
};

export const loginUserApi = (data: TLoginData): Promise<TAuthResponse> => {
	console.log(data);
	return new Promise((resolve) => {
		setTimeout(
			() =>
				resolve({
					success: true,
					refreshToken: 'testRefreshToken',
					accessToken: 'testAccessToken',
					user: {
						id: '1',
						email: 'Mariia@gmail.com',
						name: 'Мария',
						city: 'Москва',
						gender: 'Женский',
						bornDate: '28.10.1995',
						avatar: 'images/user-avatar.jpg',
						description:
							'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме. Всегда готова пообщаться и обменяться чем‑то интересным!',
					},
				}),
			TEST_DELAY
		);
	});
};

export const getUserApi = (): Promise<TAuthResponse> => {
	console.log('getUserApi');
	return new Promise((resolve) => {
		setTimeout(
			() =>
				resolve({
					success: true,
					refreshToken: 'testRefreshToken',
					accessToken: 'testAccessToken',
					user: {
						id: '1',
						email: 'Mariia@gmail.com',
						name: 'Мария',
						city: 'Москва',
						gender: 'Женский',
						bornDate: '28.10.1995',
						avatar: 'images/user-avatar.jpg',
						description:
							'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме. Всегда готова пообщаться и обменяться чем‑то интересным!',
					},
				}),
			TEST_DELAY
		);
	});
};

export const updateUserApi = (data: Partial<TUser>): Promise<TAuthResponse> => {
	console.log(data);
	return new Promise((resolve) => {
		setTimeout(
			() =>
				resolve({
					success: true,
					refreshToken: 'testRefreshToken',
					accessToken: 'testAccessToken',
					user: {
						id: '1',
						email: 'Mariia@gmail.com',
						name: 'Мария',
						city: 'Москва',
						gender: 'Женский',
						bornDate: '28.10.1995',
						avatar: 'images/user-avatar.jpg',
						description:
							'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме. Всегда готова пообщаться и обменяться чем‑то интересным!',
						...data,
					},
				}),
			TEST_DELAY
		);
	});
};

export const logoutApi = () => {
	console.log('logoutApi');
	return new Promise((resolve) => {
		setTimeout(() => resolve({}), TEST_DELAY);
	});
};

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		registerUser: builder.mutation<TUser, TRegisterData>({
			queryFn: async (data) => {
				const response = await registerUserApi(data);
				saveAuthTokens(response.accessToken, response.refreshToken);
				return { data: response.user };
			},
			invalidatesTags: ['User'],
		}),

		loginUser: builder.mutation<TUser, TLoginData>({
			queryFn: async (data) => {
				const response = await loginUserApi(data);
				saveAuthTokens(response.accessToken, response.refreshToken);
				return { data: response.user };
			},
			invalidatesTags: ['User'],
		}),

		getUser: builder.query<TUser, void>({
			queryFn: async () => {
				const response = await getUserApi();
				return { data: response.user };
			},
			providesTags: ['User'],
		}),

		updateUser: builder.mutation<TUser, Partial<TUser>>({
			queryFn: async (data) => {
				const response = await updateUserApi(data);
				return { data: response.user };
			},
			invalidatesTags: ['User'],
		}),

		updateUserAvatar: builder.mutation<TUser, string>({
			queryFn: async (file) => {
				const response = await updateUserApi({ avatar: file });
				return { data: response.user };
			},
			invalidatesTags: ['User'],
		}),

		logoutUser: builder.mutation<void, void>({
			queryFn: async () => {
				await logoutApi();
				clearAuthTokens();
				return { data: undefined };
			},
			invalidatesTags: ['User'],
		}),
	}),
});

export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useGetUserQuery,
	useLazyGetUserQuery,
	useUpdateUserMutation,
	useUpdateUserAvatarMutation,
	useLogoutUserMutation,
} = userApi;
