import { updateUser, userSelectors } from '@/entities';
import { Button, useTypedDispatch, useTypedSelector } from '@/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { ProfileAvatar } from './profileAvatar';
import { ProfileContactInfo } from './profileContactInfo';
import { ProfileDescription } from './profileDescription';
import cls from './profileForm.module.scss';
import { ProfilePersonalInfo } from './profilePersonalInfo';
import {
	profileFormSchema,
	type ProfileFormData,
} from '../../model/validation';

export const ProfileForm = () => {
	const dispatch = useTypedDispatch();
	const user = useTypedSelector(userSelectors.data)!;
	const getError = useTypedSelector(userSelectors.getError);

	const methods = useForm<ProfileFormData>({
		resolver: yupResolver(profileFormSchema),
		defaultValues: {
			email: user.email,
			name: user.name,
			bornDate: user.bornDate,
			gender: user.gender,
			city: user.city,
			description: user.description,
			avatar: user.avatar,
		},
		mode: 'onChange',
		shouldUseNativeValidation: false,
	});

	const onSubmit = methods.handleSubmit(async (data: ProfileFormData) => {
		try {
			await dispatch(updateUser(data));
		} catch (error) {
			methods.setError('root', {
				type: 'manual',
				message: 'Ошибка при сохранении профиля',
			});
		}
	});

	if (getError) return <div className={cls.error}>Ошибка загрузки профиля</div>;

	const isButtonDisable =
		!methods.formState.isDirty ||
		methods.formState.isSubmitting ||
		!methods.formState.isValid;

	return (
		<FormProvider {...methods}>
			<form className={cls.form} onSubmit={onSubmit} noValidate>
				<div className={cls.wrapper}>
					<ProfileContactInfo />
					<ProfilePersonalInfo />
					<ProfileDescription />

					{methods.formState.errors.root && (
						<div className={cls.error}>
							{methods.formState.errors.root.message}
						</div>
					)}
					<Button type='submit' disabled={isButtonDisable}>
						{methods.formState.isSubmitting ? 'Сохранение...' : 'Сохранить'}
					</Button>
				</div>

				<ProfileAvatar />
			</form>
		</FormProvider>
	);
};
