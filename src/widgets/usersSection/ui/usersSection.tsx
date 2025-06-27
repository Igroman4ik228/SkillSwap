import type { UserSectionProps } from './type';
import cls from './usersSection.module.scss';

export const UsersSection = ({
	title,
	actionChildren,
	children,
}: UserSectionProps) => {
	return (
		<section className={cls.userSection}>
			<header className={cls.header}>
				<h1 className={cls.title}>{title}</h1>
				{actionChildren && actionChildren}
			</header>
			<div>{children}</div>
		</section>
	);
};
