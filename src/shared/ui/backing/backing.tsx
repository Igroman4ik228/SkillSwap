import clsx from 'clsx';
import cls from './backing.module.scss';
import type { BackingProps } from './type';

export const Backing = ({ children, className }: BackingProps) => {
	return <div className={clsx(cls.backing, className)}>{children}</div>;
};
