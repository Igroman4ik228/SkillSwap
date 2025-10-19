export type TGender = 'Мужской' | 'Женский';

export type ProfileFormData = {
	email: string;
	name: string;
	bornDate: string;
	gender: TGender;
	city: string;
	description: string;
	avatar: string;
};
