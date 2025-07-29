import LogoutIcon from '@/shared/assets/icons/logout.svg?react';
import { Icon } from '../../icon';
import cls from './logoutButton.module.scss';
import type { LogoutButtonProps } from './type';

export const LogoutButton = ({ onLogout }: LogoutButtonProps) => {
	return (
		<button className={cls.logout} onClick={onLogout} type='button'>
			Выйти из аккаунта
			<Icon Svg={LogoutIcon} />
		</button>
	);
};
