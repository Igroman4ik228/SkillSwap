import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg?react';
import { Icon } from '@/shared/ui/icon';
import { useState } from 'react';
import { UserCard } from '../userCard';
import { transformUserToUserCard } from '../userCards/lib';
import cls from './suggestionsBlock.module.scss';
import type { SuggestionsBlockProps } from './type';

const MAX_CARDS = 4;

export const SuggestionsBlock = ({
	suggestedUsers,
	currentUser,
}: SuggestionsBlockProps) => {
	const [slide, setSlide] = useState(0);

	const filteredSuggestedUsers = suggestedUsers.filter(
		(user) =>
			user.id !== currentUser.id && user.teach.includes(currentUser.teach[0])
	);

	const pagesCount = Math.ceil(filteredSuggestedUsers.length / MAX_CARDS);

	return (
		<div className={cls.container}>
			<h2 className={cls.title}>Похожие предложения</h2>
			<div className={cls.usersList}>
				{slide !== 0 && (
					<Icon
						Svg={ChevronRightIcon}
						onClick={() => {
							setSlide((prev) => prev - 1);
						}}
						className={cls.leftButton}
						width='16px'
						height='16px'
					/>
				)}

				<ul className={cls.list}>
					{filteredSuggestedUsers
						.slice(
							slide * MAX_CARDS,
							Math.min((slide + 1) * MAX_CARDS, filteredSuggestedUsers.length)
						)
						.map((user) => {
							return (
								<li key={user.id}>
									<UserCard userCardData={transformUserToUserCard(user)} />
								</li>
							);
						})}
				</ul>

				{slide !== pagesCount - 1 && (
					<Icon
						Svg={ChevronRightIcon}
						onClick={() => {
							setSlide((prev) => prev + 1);
						}}
						className={cls.rightButton}
						width='16px'
						height='16px'
					/>
				)}
			</div>
		</div>
	);
};
