import { ROUTES } from '@/shared';
import { Link } from 'react-router-dom';
import { LogoutButton } from './logoutButton';
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
			<LogoutButton onLogout={handleLogout} />
		</div>
	);
};
