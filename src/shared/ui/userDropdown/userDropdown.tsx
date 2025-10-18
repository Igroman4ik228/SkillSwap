import { ROUTES } from '@/shared';
import { Link } from 'react-router-dom';
import { LogoutButton } from './logoutButton';
import cls from './userDropdown.module.scss';

export const UserDropdown = () => {
	const handleLogout = () => {
		// Logic for logging out the user
	};

	return (
		<div className={cls.dropdown}>
			<Link className={cls.item} to={ROUTES.PROFILE}>
				Личный кабинет
			</Link>
			<LogoutButton onLogout={handleLogout} />
		</div>
	);
};
