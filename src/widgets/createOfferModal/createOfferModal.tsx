import { Button, Icon, Modal } from '@/shared';
import Done from '@/shared/assets/icons/done.svg?react';
import type { CreateOfferModalProps } from './type';
import styles from './createOfferModal.module.scss';

export const CreateOfferModal = ({ onClose }: CreateOfferModalProps) => {
	return (
		<Modal onClose={onClose} className={styles.createOfferModal}>
			<Icon Svg={Done} width={100} height={100} className={styles.icon} />
			<h2 className={styles.title}>Ваше предложение создано</h2>
			<p className={styles.description}>Теперь вы можете предложить обмен</p>
			<Button onClick={onClose}>Готово</Button>
		</Modal>
	);
};
