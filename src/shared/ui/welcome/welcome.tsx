import clsx from 'clsx';
import cls from './welcome.module.scss';
import type { WelcomeProps } from './type';
import { Backing } from '../backing';

export const Welcome = ({ image, title, text, className }: WelcomeProps) => {
	return (
		<Backing className={clsx(cls.wrapper, className)}>
			<div className={cls.welcome}>
				{image}
				<div className={cls.content}>
					<h2 className={cls.title}>{title}</h2>
					<p>{text}</p>
				</div>
			</div>
		</Backing>
	);
};
