import { NavLink } from 'react-router-dom';
import { Icon, ROUTES } from '@/shared';
import Request from '@/shared/assets/icons/request.svg?react';
import MessageText from '@/shared/assets/icons/message-text.svg?react';
import Like from '@/shared/assets/icons/like.svg?react';
import Idea from '@/shared/assets/icons/idea.svg?react';
import User from '@/shared/assets/icons/user.svg?react';
import clsx from 'clsx';
import styles from './profileMenu.module.scss';

export const ProfileMenu = () => {
	return (
		<div className={styles.profileMenu}>
			<NavLink
				to={ROUTES.PROFILE_APPLICATIONS}
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.linkActive)
				}
			>
				<Icon Svg={Request} />
				Заявки
			</NavLink>
			<NavLink
				to={ROUTES.PROFILE_EXCHANGE}
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.linkActive)
				}
			>
				<Icon Svg={MessageText} />
				Мои обмены
			</NavLink>
			<NavLink
				to={ROUTES.PROFILE_FAVORITES}
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.linkActive)
				}
			>
				<Icon Svg={Like} />
				Избранное
			</NavLink>
			<NavLink
				to={ROUTES.PROFILE_SKILLS}
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.linkActive)
				}
			>
				<Icon Svg={Idea} />
				Мои навыки
			</NavLink>
			<NavLink
				to={ROUTES.PROFILE}
				end
				className={({ isActive }) =>
					clsx(styles.link, isActive && styles.linkActive)
				}
			>
				<Icon Svg={User} />
				Личные данные
			</NavLink>
		</div>
	);
};
