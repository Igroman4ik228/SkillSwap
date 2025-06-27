import { Button, Icon, Modal } from '@/shared';
import UserCircle from '@/shared/assets/icons/user-circle.svg?react';
import type { LoginYourAccountModalProps } from './type';
import styles from './loginYourAccountModal.module.scss';

export const LoginYourAccountModal = ({
	isOpen,
	onClose,
}: LoginYourAccountModalProps) => {
	return (
		<Modal {...{ isOpen, onClose }} className={styles.createOfferModal}>
			<Icon Svg={UserCircle} width={100} height={100} className={styles.icon} />
			<h2 className={styles.title}>Пожалуйста, войдите в аккаунт</h2>
			<p className={styles.description}>
				Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками c
				другими людьми
			</p>
			<div className={styles.button_wrapper}>
				<Button appearance='secondary' onClick={onClose}>
					Отмена
				</Button>
				<Button onClick={onClose}>Войти</Button>
			</div>
		</Modal>
	);
};
