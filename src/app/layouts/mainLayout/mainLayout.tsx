import { Footer, Header, useFooter, useHeaderAppearance } from '@/widgets';
import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import cls from './mainLayout.module.scss';

export const MainLayout = ({ children }: { children?: ReactNode }) => {
	const headerAppearance = useHeaderAppearance();
	const hasFooter = useFooter();

	return (
		<div className={cls.stickyFooter}>
			<Header appearance={headerAppearance} />
			<main>{children ?? <Outlet />}</main>
			{hasFooter && <Footer className={cls.footer} />}
		</div>
	);
};
