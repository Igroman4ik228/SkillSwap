import { Button, Icon, ROUTES } from '@/shared';
import LogoutIcon from '@/shared/assets/icons/logout.svg?react';
import { Link } from 'react-router-dom';
import cls from './userDropdown.module.scss';

export const UserDropdown = () => {
	const handleLogout: () => void = () => {
		console.log('User logged out');
		// Logic for logging out the user
	};

	return (
		<div className={cls.dropdown}>
			<Link className={cls.link} to={ROUTES.PROFILE}>
				Личный кабинет
			</Link>
			<Button className={cls.logoutButton} onClick={handleLogout}>
				Выйти из аккаунта
				<Icon Svg={LogoutIcon} />
			</Button>
		</div>
	);
};
