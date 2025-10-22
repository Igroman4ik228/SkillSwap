import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import cls from './authLayout.module.scss';

type AuthLayoutProps = {
	header: ReactNode;
	children?: ReactNode;
};

export const AuthLayout = ({ header, children }: AuthLayoutProps) => {
	return (
		<div className={cls.authLayout}>
			<div className={cls.header}>{header}</div>
			<div className={cls.content}>{children ?? <Outlet />}</div>
		</div>
	);
};
