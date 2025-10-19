import type { ProfileFormData } from '@/entities';
import { Input, getErrorMessage } from '@/shared';
import EditIcon from '@/shared/assets/icons/edit.svg?react';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import cls from './profileContactInfo.module.scss';

export const ProfileContactInfo = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ProfileFormData>();

	const emailRef = useRef<HTMLInputElement>(null);

	return (
		<div className={cls.wrapper}>
			<Input
				title='Почта'
				{...register('email')}
				{...getErrorMessage(errors.email)}
				ref={(e) => {
					register('email').ref(e);
					emailRef.current = e;
				}}
				icon={{
					Svg: EditIcon,
					onClick: () => emailRef.current?.focus(),
				}}
			/>

			<NavLink to='/' className={cls.link}>
				Изменить пароль
			</NavLink>
		</div>
	);
};
