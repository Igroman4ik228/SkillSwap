import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getUserApi,
	loginUserApi,
	logoutApi,
	registerUserApi,
	updateUserApi,
} from '../api';
import type { TLoginData, TRegisterData, TUser } from './type';
import { clearAuthTokens, saveAuthTokens } from '../lib';

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
	clearAuthTokens();
});

export const checkUserAuth = createAsyncThunk(
	'user/checkUserAuth',
	async (_, { dispatch }) => {
		// TODO: сделать с cookie
		// if (getCookie(ACCESS_TOKEN_KEY)) await dispatch(getUser())
		await dispatch(getUser());
	}
);
