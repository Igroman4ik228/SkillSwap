import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TServerResponse<T> = {
	success: boolean;
} & T;

export const baseApi = createApi({
	reducerPath: 'baseApi',
	tagTypes: ['User'],
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
		prepareHeaders: (headers) => {
			// TODO: Добавить header
			// const token = getCookie(ACCESS_TOKEN_KEY);
			// if (token) {
			//   headers.set('authorization', `auth ${token}`);
			// }
			return headers;
		},
	}),
	endpoints: () => ({}),
});
