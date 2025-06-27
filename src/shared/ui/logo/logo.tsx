import LogoIcon from '@/shared/assets/icons/logo.svg?react';
import styles from './logo.module.scss';
import type { LogoProps } from './type';

export const Logo = ({ text }: LogoProps) => (
	<div className={styles.logo}>
		<LogoIcon className={styles.icon} />
		<h2 className={styles.text}>{text}</h2>
	</div>
);
