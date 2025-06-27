import { Button, Icon, Modal } from '@/shared';
import UserCircle from '@/shared/assets/icons/user-circle.svg?react';
import type { CreateOfferModalProps } from './type';
import styles from './createOfferModal.module.scss';

export const CreateOfferModal = ({
	isOpen,
	onClose,
}: CreateOfferModalProps) => {
	return (
		<Modal {...{ isOpen, onClose }} className={styles.createOfferModal}>
			<Icon Svg={UserCircle} width={100} height={100} className={styles.icon} />
			<h2 className={styles.title}>Ваше предложение создано</h2>
			<p className={styles.description}>Теперь вы можете предложить обмен</p>
			<Button onClick={onClose}>Готово</Button>
		</Modal>
	);
};
