import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TServerResponse<T> = {
	success: boolean;
} & T;

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5173/db/',
	}),
	tagTypes: ['Me'],
	endpoints: () => ({}),
});
