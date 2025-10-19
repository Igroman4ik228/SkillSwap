import { ProfileMenu } from '@/widgets';
import { Outlet } from 'react-router-dom';
import cls from './profileLayout.module.scss';

export const ProfileLayout = () => (
	<div className={cls.profilePage}>
		<ProfileMenu />
		<div className={cls.content}>
			<Outlet />
		</div>
	</div>
);
