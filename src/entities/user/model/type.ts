export type TUser = {
	id: string;
	email: string;
	name: string;
	city: string;
	gender: 'Женский' | 'Мужской';
	bornDate: string;
	avatar: string;
	description: string;
};

// Дополнить по мере встраивания функционала
export type TRegisterData = {
	email: string;
	password: string;
	name: string;
	bornDate: string;
	gender: 'Женский' | 'Мужской';
	city: string;
	description: string;
	avatar: string;
};

export type TLoginData = {
	email: string;
	password: string;
};

export type TUserState = {
	data: TUser | null;
	isAuthChecked: boolean;
	registerIsLoading: boolean;
	registerError: string | null;
	loginIsLoading: boolean;
	loginError: string | null;
	getIsLoading: boolean;
	getError: string | null;
	updateIsLoading: boolean;
	updateError: string | null;
};
