import type { TAllSkills } from '@/entities';

export type TUserCard = {
	id: string;
	name: string;
	city: string;
	age: number;
	teach: TAllSkills;
	learn: TAllSkills[];
	avatar: string;
	isFavorite: boolean;
	isExchangeRequested: boolean;
	description: string;
};
