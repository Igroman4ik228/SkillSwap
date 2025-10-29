import { Input, getErrorMessage } from '@/shared';
import EditIcon from '@/shared/assets/icons/edit.svg?react';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import type { ProfileFormData } from '@/features/changeProfile/model/validation';
import cls from './profilePersonalInfo.module.scss';

// TODO: заменить селекты на дропдауны и инпут с датой на календарь

export const ProfilePersonalInfo = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ProfileFormData>();

	const nameRef = useRef<HTMLInputElement>(null);

	return (
		<div className={cls.wrapper}>
			<Input
				title='Имя'
				{...register('name')}
				{...getErrorMessage(errors.name)}
				ref={(e) => {
					register('name').ref(e);
					nameRef.current = e;
				}}
				icon={{
					Svg: EditIcon,
					onClick: () => nameRef.current?.focus(),
				}}
			/>

			<div className={cls.row}>
				<Input
					className={cls.bornDate}
					title='Дата рождения'
					type='date'
					{...register('bornDate')}
					{...getErrorMessage(errors.bornDate)}
				/>

				<div className={cls.gender}>
					<div className={cls.title}>Пол</div>
					<select className={cls.select} {...register('gender')}>
						<option value='Женский'>Женский</option>
						<option value='Мужской'>Мужской</option>
					</select>
				</div>
			</div>

			<div className={cls.city}>
				<div>Город</div>
				<select className={cls.select} {...register('city')}>
					<option value='Москва'>Москва</option>
					<option value='Санкт-Петербург'>Санкт-Петербург</option>
					<option value='Калининград'>Калининград</option>
				</select>
			</div>
		</div>
	);
};
