import clsx from 'clsx';
import cls from './welcome.module.scss';
import type { WelcomeProps } from './type';

export const Welcome = ({ image, title, text, className }: WelcomeProps) => {
	return (
		<div className={clsx(cls.welcome, className)}>
			{image}
			<div className={cls.content}>
				<h2 className={cls.title}>{title}</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};
