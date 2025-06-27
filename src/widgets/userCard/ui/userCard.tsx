import { Button, Icon, ROUTES } from '@/shared';
import LikeActiveIcon from '@/shared/assets/icons/like-active.svg?react';
import LikeIcon from '@/shared/assets/icons/like.svg?react';
import { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { formatAge } from '../lib/formatAge';
import { SkillList } from './skillList';
import type { UserCardProps } from './type';
import styles from './userCard.module.scss';

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
		<div className={styles.card}>
			<div className={styles.preview}>
				<div className={styles.avatar}>
					<img src={avatar} alt='Фото профиля' />
				</div>

				<div className={styles.user}>
					<h3 className={styles.userName}>{name}</h3>
					<p className={styles.userInfo}>
						{city}, {formattedAge}
					</p>
				</div>

				<Icon
					Svg={isFavorite ? LikeActiveIcon : LikeIcon}
					className={styles.likeButton}
					onClick={handleLikeClick}
				/>
			</div>

			{showDescription && <p className={styles.description}>{description}</p>}

			<div className={styles.skills}>
				<section className={styles.section}>
					<h4 className={styles.title}>Может научить:</h4>
					<SkillList items={[teach]} />
				</section>
				<section className={styles.section}>
					<h4 className={styles.title}>Хочет научиться:</h4>
					<SkillList items={learn} />
				</section>
			</div>

			<Link to={generatePath(ROUTES.SKILL, { skillId: id })}>
				<Button appearance={isExchangeRequested ? 'secondary' : 'primary'}>
					{isExchangeRequested ? 'Обмен предложен' : 'Подробнее'}
				</Button>
			</Link>
		</div>
	);
};
