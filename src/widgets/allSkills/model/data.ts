import BriefcaseIcon from '@/shared/assets/icons/briefcase.svg?react';
import PaletteIcon from '@/shared/assets/icons/palette.svg?react';
import GlobalIcon from '@/shared/assets/icons/global.svg?react';
import BookIcon from '@/shared/assets/icons/book.svg?react';
import HomeIcon from '@/shared/assets/icons/home.svg?react';
import LifestyleIcon from '@/shared/assets/icons/lifestyle.svg?react';
import { type FC, type SVGProps } from 'react';
import type { TAllSkills } from '@/entities';

// TODO: переименовать файл из data.ts в type.ts

export type THeaderTitle =
	| 'Бизнес и карьера'
	| 'Творчество и искусство'
	| 'Иностранные языки'
	| 'Образование и развитие'
	| 'Дом и уют'
	| 'Здоровье и лайфстайл';

export type TSkillSectionData = {
	title: THeaderTitle;
	icon: FC<SVGProps<SVGSVGElement>>;
	items: TAllSkills[];
};

// TODO: перенести создание SKILL_SECTIONS в allSkills
export const SKILL_SECTIONS: TSkillSectionData[] = [
	{
		title: 'Бизнес и карьера',
		icon: BriefcaseIcon,
		// TODO: создать api entities/skills, сделать вызов в компоненте allSkills,
		//  заменить items на данные, приходящие с сервера (skills.json)
		items: [
			'Управление командой',
			'Маркетинг и реклама',
			'Продажи и переговоры',
			'Личный бренд',
			'Резюме и собеседование',
			'Тайм-менеджмент',
			'Проектное управление',
			'Предпринимательство',
		],
	},
	{
		title: 'Творчество и искусство',
		icon: PaletteIcon,
		items: [
			'Рисование и иллюстрация',
			'Фотография',
			'Видеомонтаж',
			'Музыка и звук',
			'Актёрское мастерство',
			'Креативное письмо',
			'Арт-терапия',
			'Декор и DIY',
		],
	},
	{
		title: 'Иностранные языки',
		icon: GlobalIcon,
		items: [
			'Английский',
			'Французский',
			'Испанский',
			'Немецкий',
			'Китайский',
			'Японский',
			'Подготовка к экзаменам (IELTS, TOEFL)',
		],
	},
	{
		title: 'Образование и развитие',
		icon: BookIcon,
		items: [
			'Личностное развитие',
			'Навыки обучения',
			'Когнитивные техники',
			'Скорочтение',
			'Навыки преподавания',
			'Коучинг',
		],
	},
	{
		title: 'Дом и уют',
		icon: HomeIcon,
		items: [
			'Уборка и организация',
			'Домашние финансы',
			'Приготовление еды',
			'Домашние растения',
			'Ремонт',
			'Хранение вещей',
		],
	},
	{
		title: 'Здоровье и лайфстайл',
		icon: LifestyleIcon,
		items: [
			'Йога и медитация',
			'Питание и ЗОЖ',
			'Ментальное здоровье',
			'Осознанность',
			'Физические тренировки',
			'Сон и восстановление',
			'Баланс жизни и работы',
		],
	},
];
