import { Icon } from '@/shared';
import LikeIcon from '@/shared/assets/icons/like.svg?react';
import NotificationIcon from '@/shared/assets/icons/notification.svg?react';
import ThemeMoon from '@/shared/assets/icons/theme-moon.svg?react';
import cls from './additionalButtons.module.scss';
import type { AdditionalButtonsProps } from './type';

export const AdditionalButtons = ({
	isAuth = false,
}: AdditionalButtonsProps) => {
	const handleToggleTheme = () => {
		// TODO: заменить на реальную логику смены темы
	};

	const handleOpenNotifications = () => {
		// TODO: логика открытия уведомлений
	};

	const handleOpenFavorites = () => {
		// TODO: логика перехода в избранное
	};

	return (
		<div className={cls.additionalButtons}>
			<Icon Svg={ThemeMoon} onClick={handleToggleTheme} />

			{isAuth && (
				<Icon Svg={NotificationIcon} onClick={handleOpenNotifications} />
			)}

			{isAuth && <Icon Svg={LikeIcon} onClick={handleOpenFavorites} />}
		</div>
	);
};
