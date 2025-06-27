import { Button, Icon, Modal } from '@/shared';
import Notification from '@/shared/assets/icons/notification.svg?react';
import type { OfferedExchangeModalProps } from './type';
import styles from './OfferedExchangeModal.module.scss';

export const OfferedExchangeModal = ({
	isOpen,
	onClose,
}: OfferedExchangeModalProps) => {
	return (
		<Modal {...{ isOpen, onClose }} className={styles.createOfferModal}>
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
			<Button onClick={onClose}>Готово</Button>
		</Modal>
	);
};
