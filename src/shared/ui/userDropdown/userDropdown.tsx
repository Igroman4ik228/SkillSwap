import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared';

import LogoutIcon from '@/shared/assets/icons/logout.svg?react';

import { Icon } from '@/shared/ui/icon';
import styles from './userDropdown.module.scss';

export const UserDropdown = () => {
	const handleLogout = () => {
		// Logic for logging out the user
	};

	return (
		<div className={styles.dropdown}>
			<Link className={styles.item} to={ROUTES.PROFILE}>
				Личный кабинет
			</Link>

			<div className={styles.logout}>
				<div
					className={styles.item}
					role='button'
					tabIndex={0}
					onClick={handleLogout}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							handleLogout();
						}
					}}
				>
					Выйти из аккаунта
				</div>
				<Icon Svg={LogoutIcon} />
			</div>
		</div>
	);
};
