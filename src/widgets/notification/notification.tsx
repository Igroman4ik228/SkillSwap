import { Icon } from '@/shared/ui/icon';
import Idea from '@/shared/assets/icons/idea.svg?react';
import Cross from '@/shared/assets/icons/cross.svg?react';
import { Button } from '@/shared/ui/button';
import clsx from 'clsx';
import type { NotificationProps } from './type';
import styles from './notification.module.scss';

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
			<div className={styles.notificationPopup}>
				<div className={clsx(styles.infoWrapper)}>
					<Icon Svg={Idea} height={40} width={40} className={styles.icon} />
					<div>
						<h4 className={styles.popupTitle}>{title}</h4>
						<p className={styles.description}>{description}</p>
					</div>
					<div className={styles.date}>{date}</div>
				</div>
				{!isChecked && (
					<Button
						className={styles.popupButton}
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
		<div className={clsx(styles.notificationMain)}>
			<Icon Svg={Idea} height={20} width={20} />
			<div>
				<h3 className={styles.mainTitle}>{title}</h3>
			</div>
			<Icon
				Svg={Cross}
				className={styles.cross}
				onClick={() => {}}
				height={24}
				width={24}
			/>
			<Button
				className={styles.mainButton}
				appearance='tertiary'
				fullWidth={false}
			>
				Перейти
			</Button>
		</div>
	);
};

export default Notification;
