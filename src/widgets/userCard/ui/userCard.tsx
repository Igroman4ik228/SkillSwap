import { Icon, RouterLinkButton, ROUTES } from '@/shared';
import LikeActiveIcon from '@/shared/assets/icons/like-active.svg?react';
import LikeIcon from '@/shared/assets/icons/like.svg?react';
import { useState } from 'react';
import { generatePath } from 'react-router-dom';
import { formatAge } from '../lib/formatAge';
import { SkillList } from './skillList';
import type { UserCardProps } from './type';
import cls from './userCard.module.scss';

export const UserCard = ({
	userCardData,
	showDescription = false,
}: UserCardProps) => {
	const {
		id,
		name,
		city,
		age,
		teach,
		learn,
		avatar,
		isExchangeRequested,
		description,
	} = userCardData;
	const [isFavorite, setIsFavorite] = useState(userCardData.isFavorite);

	const formattedAge = formatAge(age);

	const handleLikeClick = () => {
		const newValue = !isFavorite;
		setIsFavorite(newValue);

		// TODO: здесь нужно отправить запрос на сервер, чтобы сохранить или удалить из избранного

		const storageKey = 'favoriteUsersCard';
		const stored = localStorage.getItem(storageKey);
		const favorites = stored ? JSON.parse(stored) : [];

		const updatedFavorites = newValue
			? [...favorites, id]
			: favorites.filter((userId: string) => userId !== id);

		localStorage.setItem(storageKey, JSON.stringify(updatedFavorites));
	};

	return (
		<div className={cls.card}>
			<div className={cls.preview}>
				<div className={cls.avatar}>
					<img src={avatar} alt='Фото профиля' />
				</div>

				<div className={cls.user}>
					<h3 className={cls.userName}>{name}</h3>
					<p className={cls.userInfo}>
						{city}, {formattedAge}
					</p>
				</div>

				<Icon
					Svg={isFavorite ? LikeActiveIcon : LikeIcon}
					className={cls.likeButton}
					onClick={handleLikeClick}
				/>
			</div>

			{showDescription && <p className={cls.description}>{description}</p>}

			<div className={cls.skills}>
				<section className={cls.section}>
					<h4 className={cls.title}>Может научить:</h4>
					<SkillList items={[teach]} />
				</section>
				<section className={cls.section}>
					<h4 className={cls.title}>Хочет научиться:</h4>
					<SkillList items={learn} />
				</section>
			</div>

			<RouterLinkButton
				to={generatePath(ROUTES.SKILL, { skillId: id })}
				appearance={isExchangeRequested ? 'secondary' : 'primary'}
			>
				{isExchangeRequested ? 'Обмен предложен' : 'Подробнее'}
			</RouterLinkButton>
		</div>
	);
};
