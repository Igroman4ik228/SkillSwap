import { LinkButton } from '@/shared';
import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg?react';
import cls from './showMoreButton.module.scss';

export const ShowMoreButton = () => {
	return (
		<LinkButton
			href='#all'
			className={cls.button}
			appearance='tertiary'
			fullWidth={false}
		>
			Смотреть всё
			<ChevronRightIcon />
		</LinkButton>
	);
};
