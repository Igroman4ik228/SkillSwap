import { checkUserAuth } from '@/entities';
import { useHeaderAppearance, useTypedDispatch } from '@/shared';
import { Footer, Header } from '@/widgets';
import { useEffect, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import cls from './app.module.scss';

export const App = ({ children }: { children?: ReactNode }) => {
	const dispatch = useTypedDispatch();
	const headerAppearance = useHeaderAppearance();

	useEffect(() => {
		dispatch(checkUserAuth());
	}, [dispatch]);

	return (
		<div className={cls.stickyFooter}>
			<Header appearance={headerAppearance} />
			<main>{children ?? <Outlet />}</main>
			<Footer className={cls.footer} />
		</div>
	);
};
