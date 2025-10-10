import { Button, Icon } from '@/shared';
import Notification from '@/shared/assets/icons/notification.svg?react';
import styles from './offeredExchange.module.scss';
import type { OfferedExchangeProps } from './type';

export const OfferedExchange = ({ onDone }: OfferedExchangeProps) => {
	return (
		<div className={styles.offeredExchange}>
			<Icon
				Svg={Notification}
				width={100}
				height={100}
				className={styles.icon}
			/>
			<h2 className={styles.title}>Вы предложили обмен</h2>
			<p className={styles.description}>
				Теперь дождитесь подтверждения. Вам придёт уведомление
			</p>
			<Button onClick={onDone}>Готово</Button>
		</div>
	);
};
