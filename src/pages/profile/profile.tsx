import { UserProfileForm } from '@/entities/user/ui/userProfileForm/userProfileForm';
import { ChangeAvatarForm } from '@/features';

export const ProfilePage = () => {
	return (
		<>
			<UserProfileForm />
			<ChangeAvatarForm />
		</>
	);
};
