import { ProfileMenu } from '@/widgets';
import { Outlet } from 'react-router-dom';
import styles from './profileLayout.module.scss';

export const ProfileLayout = () => (
	<div className={styles.profilePage}>
		<ProfileMenu />
		<div className={styles.main}>
			<Outlet />
		</div>
	</div>
);
