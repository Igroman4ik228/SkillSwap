import type { TUsers } from '@/entities';
import { InfiniteScrolling } from '@/features';
import { FiltersBar, ShowMoreButton, UserCards, UsersSection } from '@/widgets';
import { useEffect, useState } from 'react';
import cls from './skills.module.scss';

export const SkillsPage = () => {
	const [users, setUsers] = useState<TUsers[]>([]);

	const fetchUsers = async (page: number, pageSize: number) => {
		const response = await fetch('/db/users.json');
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}
		const allUsers = (await response.json()) as TUsers[];

		const start = (page - 1) * pageSize;
		return allUsers.slice(start, start + pageSize);
	};

	useEffect(() => {
		fetchUsers(1, 6)
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className={cls.container}>
			<div className={cls.filtersBar}>
				<FiltersBar />
			</div>
			<div className={cls.content}>
				<UsersSection title='Популярное' actionChildren={<ShowMoreButton />}>
					<UserCards users={users.slice(0, 3)} />
				</UsersSection>

				<UsersSection title='Новое' actionChildren={<ShowMoreButton />}>
					<UserCards users={users.slice(3, 6)} />
				</UsersSection>

				<div id='all'>
					<UsersSection title='Рекомендуем'>
						<InfiniteScrolling fetchCards={fetchUsers} pageSize={6} />
					</UsersSection>
				</div>
			</div>
		</div>
	);
};
