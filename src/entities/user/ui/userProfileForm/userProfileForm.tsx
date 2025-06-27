import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateUser } from '@/entities/user/model/thunks';
import { Input } from '@/shared/ui/input/input';
import { useTypedDispatch, useTypedSelector } from '@/shared/hooks/store';
import { Button, Preloader } from '@/shared';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import EditIcon from '@/shared/assets/icons/edit.svg?react';
import { Textarea } from '@/shared/ui/textarea/textarea';
import { profileSchema } from './validation';
import styles from './userProfileForm.module.scss';
import { userSelectors } from '../../model';

// TODO: заменить селекты на дропдауны и инпут с датой на календарь

type TProfileFormData = {
	email: string;
	name: string;
	bornDate: string;
	gender: string;
	city: string;
	description: string;
};

export const UserProfileForm = () => {
	const dispatch = useTypedDispatch();
	const user = useTypedSelector(userSelectors.data);
	const getError = useTypedSelector(userSelectors.getError);

	const emailRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		reset,
	} = useForm<TProfileFormData>({
		resolver: yupResolver(profileSchema),
		defaultValues: undefined,
		mode: 'onChange',
		reValidateMode: 'onChange',
	});

	useEffect(() => {
		if (user) {
			let bornDate = user.bornDate || '';

			// Преобразуем дату из дд.мм.гггг в гггг-мм-дд
			if (/^\d{2}\.\d{2}\.\d{4}$/.test(bornDate)) {
				const [day, month, year] = bornDate.split('.');
				bornDate = `${year}-${month}-${day}`;
			}
			reset({
				email: user.email || '',
				name: user.name || '',
				bornDate,
				gender: user.gender || '',
				city: user.city || '',
				description: user.description || '',
			});
		}
	}, [user, reset]);

	const onSubmit = (data: TProfileFormData) => {
		const mappedData = {
			...data,
			gender:
				data.gender === 'Мужской' || data.gender === 'Женский'
					? (data.gender as 'Мужской' | 'Женский')
					: undefined,
		};
		dispatch(updateUser(mappedData));
	};

	if (getError) return <div>Ошибка загрузки профиля</div>;
	if (!user) return <Preloader />;

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				title='Почта'
				{...register('email')}
				error={!!errors.email}
				errorText={errors.email?.message}
				ref={(e) => {
					register('email').ref(e);
					emailRef.current = e;
				}}
				icon={{
					svg: EditIcon,
					onClick: () => emailRef.current?.focus(),
				}}
			/>
			<NavLink to='/change-password' className={styles.link}>
				Изменить пароль
			</NavLink>
			<Input
				title='Имя'
				{...register('name')}
				ref={(e) => {
					register('name').ref(e);
					nameRef.current = e;
				}}
				error={!!errors.name}
				errorText={errors.name?.message}
				icon={{
					svg: EditIcon,
					onClick: () => nameRef.current?.focus(),
				}}
			/>
			<div className={styles.row}>
				<Input
					className={styles.bornDate}
					title='Дата рождения'
					type='date'
					{...register('bornDate')}
					error={!!errors.bornDate}
					errorText={errors.bornDate?.message}
				/>
				<div className={styles.gender}>
					<div className={styles.title}>Пол</div>
					<select className={styles.select} {...register('gender')}>
						<option value='Не указан'>Не указан</option>
						<option value='Женский'>Женский</option>
						<option value='Мужской'>Мужской</option>
					</select>
				</div>
			</div>
			<div className={styles.city}>
				<div>Город</div>
				<select className={styles.select} {...register('city')}>
					<option value='Москва'>Москва</option>
					<option value='Санкт-Петербург'>Санкт-Петербург</option>
					<option value='Калининград'>Калининград</option>
				</select>
			</div>
			<Textarea
				title='О себе'
				{...register('description')}
				className={styles.textarea}
				ref={(e) => {
					register('description').ref(e);
					descriptionRef.current = e;
				}}
				error={!!errors.description}
				errorText={errors.description?.message}
				icon={{
					svg: EditIcon,
					onClick: () => descriptionRef.current?.focus(),
				}}
				rows={4}
			/>
			<Button onClick={handleSubmit(onSubmit)} disabled={!isDirty || !isValid}>
				Сохранить
			</Button>
		</form>
	);
};
