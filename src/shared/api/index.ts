// Общие функции для api
export type TServerResponse<T> = {
	success: boolean;
} & T;
