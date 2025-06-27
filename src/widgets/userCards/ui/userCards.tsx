import type { TUserCard } from '@/widgets/userCard/model/types';
import { UserCard } from '@/widgets/userCard/ui/userCard';
import { transformUserToUserCard } from '../lib';
import type { UserCardsProps } from './type';
import cls from './userCards.module.scss';

export const UserCards = ({ users }: UserCardsProps) => {
	const usersCardData: TUserCard[] = users.map(transformUserToUserCard);

	return (
		<ul className={cls.cards}>
			{usersCardData.map((userCardData) => (
				<li key={userCardData.id}>
					<UserCard userCardData={userCardData} />
				</li>
			))}
		</ul>
	);
};
