import { createSlice } from '@reduxjs/toolkit';
import {
	checkUserAuth,
	getUser,
	loginUser,
	logoutUser,
	registerUser,
	updateUser,
	updateUserAvatar,
} from './thunks';
import { type TUserState } from './type';

export const initialUserState: TUserState = {
	data: null,
	isAuthChecked: false,
	registerIsLoading: false,
	registerError: null,
	loginIsLoading: false,
	loginError: null,
	getIsLoading: false,
	getError: null,
	updateIsLoading: false,
	updateError: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {},
	selectors: {
		state: (state) => state,
		data: (state) => state.data,
		isAuthChecked: (state) => state.isAuthChecked,
		registerIsLoading: (state) => state.registerIsLoading,
		registerError: (state) => state.registerError,
		loginIsLoading: (state) => state.loginIsLoading,
		loginError: (state) => state.loginError,
		getIsLoading: (state) => state.getIsLoading,
		getError: (state) => state.getError,
		updateIsLoading: (state) => state.updateIsLoading,
		updateError: (state) => state.updateError,
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.registerError = initialUserState.registerError;
				state.registerIsLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.registerIsLoading = initialUserState.registerIsLoading;
				state.data = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.registerIsLoading = initialUserState.registerIsLoading;
				state.data = initialUserState.data;
				state.registerError = action.error.message || 'Ошибка регистрации';
			})

			.addCase(loginUser.pending, (state) => {
				state.loginError = initialUserState.loginError;
				state.loginIsLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loginIsLoading = initialUserState.loginIsLoading;
				state.data = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loginIsLoading = initialUserState.loginIsLoading;
				state.data = initialUserState.data;
				state.loginError = action.error.message || 'Ошибка входа';
			})

			.addCase(getUser.pending, (state) => {
				state.getError = initialUserState.getError;
				state.getIsLoading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.getIsLoading = initialUserState.getIsLoading;
				state.data = action.payload;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.getIsLoading = initialUserState.getIsLoading;
				state.getError =
					action.error.message || 'Ошибка получения данных пользователя';
			})

			.addCase(updateUser.pending, (state) => {
				state.updateError = initialUserState.updateError;
				state.updateIsLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.updateIsLoading = initialUserState.updateIsLoading;
				state.data = action.payload;
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.updateIsLoading = initialUserState.updateIsLoading;
				state.updateError =
					action.error.message || 'Ошибка обновления данных пользователя';
			})

			.addCase(updateUserAvatar.pending, (state) => {
				state.updateError = initialUserState.updateError;
				state.updateIsLoading = true;
			})
			.addCase(updateUserAvatar.fulfilled, (state, action) => {
				state.updateIsLoading = initialUserState.updateIsLoading;
				state.data = action.payload;
			})
			.addCase(updateUserAvatar.rejected, (state, action) => {
				state.updateIsLoading = initialUserState.updateIsLoading;
				state.updateError =
					action.error.message || 'Ошибка обновления данных пользователя';
			})

			.addCase(logoutUser.fulfilled, (state) => {
				state.data = initialUserState.data;
			})

			.addCase(checkUserAuth.fulfilled, (state) => {
				state.isAuthChecked = true;
			});
	},
});

export const { selectors: userSelectors } = userSlice;
export const { reducer: userReducer } = userSlice;
