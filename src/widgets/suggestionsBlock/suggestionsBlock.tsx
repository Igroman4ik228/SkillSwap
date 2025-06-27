import React, { useState } from 'react';
import { UserCard } from '@/widgets/userCard/ui';
import { Icon } from '@/shared/ui/icon';
import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg?react';
import type { SuggestionsBlockProps } from './type';
import styles from './suggestionsBlock.module.scss';

const MAX_CARDS = 4;

export const SuggestionsBlock = ({
	suggestedUsers,
	currentUser,
}: SuggestionsBlockProps) => {
	const [slide, setSlide] = useState(0);
	const filtredSuggestedUsers = suggestedUsers.filter(
		(user) =>
			user.id !== currentUser.id && user.teach.includes(currentUser.teach[0])
	);
	const pagesCount = Math.ceil(filtredSuggestedUsers.length / MAX_CARDS);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Похожие предложения</h2>
			<div className={styles.usersList}>
				<Icon
					Svg={ChevronRightIcon}
					onClick={() => {
						setSlide((prev) => prev - 1);
					}}
					className={styles.leftButton}
					width='16px'
					height='16px'
					visibility={slide === 0 ? 'hidden' : 'visible'}
				/>
				<ul className={styles.list}>
					{filtredSuggestedUsers
						.slice(
							slide * MAX_CARDS,
							Math.min((slide + 1) * MAX_CARDS, filtredSuggestedUsers.length)
						)
						.map((user) => {
							return (
								<li key={user.id}>
									<UserCard user={user} isExchangeRequested={false} />
								</li>
							);
						})}
				</ul>
				<Icon
					Svg={ChevronRightIcon}
					onClick={() => {
						setSlide((prev) => prev + 1);
					}}
					className={styles.rightButton}
					width='16px'
					height='16px'
					visibility={slide === pagesCount - 1 ? 'hidden' : 'visible'}
				/>
			</div>
		</div>
	);
};

export default SuggestionsBlock;
