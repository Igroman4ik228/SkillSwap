import { useHeaderAppearance } from '@/shared';
import { Footer, Header } from '@/widgets';
import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import cls from './mainLayout.module.scss';

export const MainLayout = ({ children }: { children?: ReactNode }) => {
	const headerAppearance = useHeaderAppearance();

	return (
		<div className={cls.stickyFooter}>
			<Header appearance={headerAppearance} />
			<main>{children ?? <Outlet />}</main>
			<Footer className={cls.footer} />
		</div>
	);
};
