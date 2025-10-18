import LogoIcon from '@/shared/assets/icons/logo.svg?react';
import cls from './logo.module.scss';
import type { LogoProps } from './type';

export const Logo = ({ text }: LogoProps) => (
	<div className={cls.logo}>
		<LogoIcon className={cls.icon} />
		<h2 className={cls.text}>{text}</h2>
	</div>
);
