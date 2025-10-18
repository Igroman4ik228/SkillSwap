import { Button, Icon } from '@/shared';
import Done from '@/shared/assets/icons/done.svg?react';
import cls from './createOffer.module.scss';
import type { CreateOfferProps } from './type';

export const CreateOffer = ({ onDone }: CreateOfferProps) => {
	return (
		<div className={cls.createOffer}>
			<Icon Svg={Done} width={100} height={100} className={cls.icon} />
			<h2 className={cls.title}>Ваше предложение создано</h2>
			<p className={cls.description}>Теперь вы можете предложить обмен</p>
			<Button onClick={onDone}>Готово</Button>
		</div>
	);
};
