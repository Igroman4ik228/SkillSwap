import type { ProfileFormData } from '@/entities';
import { Textarea, getErrorMessage } from '@/shared';
import EditIcon from '@/shared/assets/icons/edit.svg?react';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import cls from './profileDescription.module.scss';

export const ProfileDescription = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ProfileFormData>();

	const descriptionRef = useRef<HTMLTextAreaElement>(null);

	return (
		<Textarea
			title='О себе'
			{...register('description')}
			{...getErrorMessage(errors.description)}
			className={cls.textarea}
			ref={(e) => {
				register('description').ref(e);
				descriptionRef.current = e;
			}}
			icon={{
				Svg: EditIcon,
				onClick: () => descriptionRef.current?.focus(),
			}}
			rows={4}
		/>
	);
};
