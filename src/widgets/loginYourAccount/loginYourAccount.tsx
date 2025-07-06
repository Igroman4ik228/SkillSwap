import { Button, Icon } from '@/shared';
import UserCircle from '@/shared/assets/icons/user-circle.svg?react';
import cls from './loginYourAccount.module.scss';
import type { LoginYourAccountProps } from './type';

export const LoginYourAccount = ({ onClose }: LoginYourAccountProps) => (
	<div className={cls.loginAccount}>
		<Icon Svg={UserCircle} width={100} height={100} className={cls.icon} />
		<h2 className={cls.title}>Пожалуйста, войдите в аккаунт</h2>
		<p className={cls.description}>
			Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками c другими
			людьми
		</p>
		<div className={cls.buttonWrapper}>
			<Button appearance='secondary' onClick={onClose}>
				Отмена
			</Button>
			<Button onClick={onClose}>Войти</Button>
		</div>
	</div>
);
