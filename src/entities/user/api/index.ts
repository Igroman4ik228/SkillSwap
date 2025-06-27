import type { TServerResponse } from '@/shared';
import type { TLoginData, TRegisterData, TUser } from '../model';

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
