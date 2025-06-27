import { ProfileMenu } from '@/widgets';
import { Outlet } from 'react-router-dom';
import styles from './profile.module.scss';

export const ProfilePage = () => {
	return (
		<div className={styles.profilePage}>
			<ProfileMenu />
			<div className={styles.main}>
				<Outlet />
			</div>
		</div>
	);
};
