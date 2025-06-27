import { Button } from '@/shared';
import ChevronRightIcon from '@/shared/assets/icons/chevron-right.svg?react';
import cls from './showMoreButton.module.scss';

export const ShowMoreButton = () => {
	return (
		<a href='#all'>
			<Button className={cls.button} appearance='tertiary' fullWidth={false}>
				<p>Смотреть всё</p>
				<ChevronRightIcon />
			</Button>
		</a>
	);
};
