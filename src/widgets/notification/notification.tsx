import Cross from '@/shared/assets/icons/cross.svg?react';
import Idea from '@/shared/assets/icons/idea.svg?react';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import clsx from 'clsx';
import cls from './notification.module.scss';
import type { NotificationProps } from './type';

export const Notification = ({
	appearance = 'main',
	isChecked,
	status,
	createDate,
	name,
}: NotificationProps) => {
	const statusTextMap = {
		Pending: `${name} предлагает вам обмен`,
		Accepted: `${name} принял ваш обмен`,
		Declined: `${name} отклонил ваш обмен`,
	};
	const subTextMap = {
		Pending: 'Примите обмен, чтобы обсудить детали',
		Accepted: 'Перейдите в профиль, чтобы обсудить детали',
		Declined: 'Перейдите в профиль, чтобы обсудить детали',
	};

	const title = statusTextMap[status] ?? null;
	const description = subTextMap[status] ?? null;

	const currentDate = new Date();

	const date = (() => {
		if (currentDate.toLocaleDateString() === createDate.toLocaleDateString())
			return 'сегодня';
		if (currentDate.getDate() - 1 === createDate.getDate()) return 'вчера';
		return `${createDate.toLocaleString('default', { day: 'numeric', month: 'long' })}`;
	})();

	if (appearance === 'inProfilePopup') {
		return (
			<div className={cls.notificationPopup}>
				<div className={clsx(cls.infoWrapper)}>
					<Icon Svg={Idea} height={40} width={40} className={cls.icon} />
					<div>
						<h4 className={cls.popupTitle}>{title}</h4>
						<p className={cls.description}>{description}</p>
					</div>
					<div className={cls.date}>{date}</div>
				</div>
				{!isChecked && (
					<Button
						className={cls.popupButton}
						appearance='primary'
						fullWidth={false}
					>
						Перейти
					</Button>
				)}
			</div>
		);
	}

	return (
		<div className={clsx(cls.notificationMain)}>
			<Icon Svg={Idea} height={20} width={20} />
			<div>
				<h3 className={cls.mainTitle}>{title}</h3>
			</div>
			<Icon
				Svg={Cross}
				className={cls.cross}
				onClick={() => {}}
				height={24}
				width={24}
			/>
			<Button
				className={cls.mainButton}
				appearance='tertiary'
				fullWidth={false}
			>
				Перейти
			</Button>
		</div>
	);
};

export default Notification;
