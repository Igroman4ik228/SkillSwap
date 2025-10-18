import { Button, Icon } from '@/shared';
import Notification from '@/shared/assets/icons/notification.svg?react';
import cls from './offeredExchange.module.scss';
import type { OfferedExchangeProps } from './type';

export const OfferedExchange = ({ onDone }: OfferedExchangeProps) => {
	return (
		<div className={cls.offeredExchange}>
			<Icon Svg={Notification} width={100} height={100} className={cls.icon} />
			<h2 className={cls.title}>Вы предложили обмен</h2>
			<p className={cls.description}>
				Теперь дождитесь подтверждения. Вам придёт уведомление
			</p>
			<Button onClick={onDone}>Готово</Button>
		</div>
	);
};
