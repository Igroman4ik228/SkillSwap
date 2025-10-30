import { ProfileMenu } from '@/widgets';
import { Outlet } from 'react-router-dom';
import { Backing } from '@/shared';
import cls from './profileLayout.module.scss';

export const ProfileLayout = () => (
	<div className={cls.profilePage}>
		<Backing className={cls.wrapperMenu}>
			<ProfileMenu />
		</Backing>
		<div className={cls.content}>
			<Outlet />
		</div>
	</div>
);
