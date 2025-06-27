import type { TAllSkills } from '@/entities/skill';

export type TUsers = {
	id: string;
	name: string;
	city: string;
	bornDate: string;
	avatar: string;
	teach: TAllSkills;
	learn: TAllSkills[];
	isFavorite: boolean;
	isExchangeRequested: boolean;
	description: string;
};
