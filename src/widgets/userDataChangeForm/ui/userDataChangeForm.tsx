import { UserProfileForm } from '@/entities/user/ui/userProfileForm/userProfileForm';
import { ChangeAvatarForm } from '@/features/changeAvatarForm/changeAvatarForm';

export const UserDataChangeForm = () => {
	return (
		<>
			<UserProfileForm />
			<ChangeAvatarForm />
		</>
	);
};
