import {
	ACCESS_TOKEN_KEY,
	deleteCookie,
	REFRESH_TOKEN_KEY,
	setCookie,
} from '@/shared';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getUserApi,
	loginUserApi,
	logoutApi,
	registerUserApi,
	updateUserApi,
} from '../api';
import type { TLoginData, TRegisterData, TUser } from './type';

const saveAuthTokens = (accessToken: string, refreshToken: string) => {
	setCookie(ACCESS_TOKEN_KEY, accessToken);
	localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (data: TRegisterData) => {
		const { user, accessToken, refreshToken } = await registerUserApi(data);
		saveAuthTokens(accessToken, refreshToken);
		return user;
	}
);

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (loginData: TLoginData) => {
		const { user, accessToken, refreshToken } = await loginUserApi(loginData);
		saveAuthTokens(accessToken, refreshToken);
		return user;
	}
);

export const getUser = createAsyncThunk('user/getUser', async () => {
	const { user } = await getUserApi();
	return user;
});

export const updateUser = createAsyncThunk(
	'user/updateUser',
	async (data: Partial<TUser>) => {
		const { user } = await updateUserApi(data);
		return user;
	}
);

export const updateUserAvatar = createAsyncThunk(
	'user/updateUserAvatar',
	async (file: string) => {
		const { user } = await updateUserApi({ avatar: file });
		return user;
	}
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
	await logoutApi();
	deleteCookie(ACCESS_TOKEN_KEY);
	localStorage.removeItem(REFRESH_TOKEN_KEY);
});

export const checkUserAuth = createAsyncThunk(
	'user/checkUserAuth',
	async (_, { dispatch }) => {
		// TODO: сделать с cookie
		// if (getCookie(ACCESS_TOKEN_KEY)) await dispatch(getUser())
		await dispatch(getUser());
	}
);
