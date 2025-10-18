import type { ProfileFormData } from '@/entities';
import { Icon } from '@/shared';
import GalleryEdit from '@/shared/assets/icons/gallery-edit.svg?react';
import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import cls from './profileAvatar.module.scss';

// TODO: Сделать рабочий функционал отправки изображения на сервер

function isFile(value: unknown): value is File {
	return (
		typeof value === 'object' &&
		value !== null &&
		'name' in value &&
		'size' in value
	);
}

const useAvatarPreview = (
	value: ProfileFormData['avatar'] | undefined,
	storeUrl?: string | null
) => {
	const [preview, setPreview] = useState<string | undefined>(() => {
		if (typeof value === 'string' && value) return value;
		if (isFile(value)) return URL.createObjectURL(value);
		return storeUrl ?? undefined;
	});

	useEffect(() => {
		let objectUrl: string | null = null;

		if (isFile(value)) {
			objectUrl = URL.createObjectURL(value);
			setPreview(objectUrl);
		} else if (typeof value === 'string' && value) {
			setPreview(value);
		} else if (storeUrl) {
			setPreview(storeUrl);
		} else {
			setPreview(undefined);
		}

		return () => {
			if (objectUrl) {
				URL.revokeObjectURL(objectUrl);
			}
		};
	}, [value, storeUrl]);

	return preview;
};

export const ProfileAvatar = () => {
	const {
		control,
		formState: { errors },
		getValues,
	} = useFormContext<ProfileFormData>();
	const { field } = useController({
		name: 'avatar',
		control,
	});

	const inputImageRef = useRef<HTMLInputElement>(null);
	const preview = useAvatarPreview(field.value, getValues('avatar'));

	const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] ?? null;
		field.onChange(file);
	};

	return (
		<div className={cls.avatarWrapper}>
			<img src={preview} alt='Аватар' className={cls.avatar} />

			<div className={cls.wrapperBtn}>
				<Icon
					Svg={GalleryEdit}
					onClick={() => {
						inputImageRef.current?.click();
					}}
					className={cls.editBtn}
				/>
				<input
					id='avatar-input'
					type='file'
					accept='image/*'
					onChange={onChangeFile}
					style={{ display: 'none' }}
					ref={inputImageRef}
				/>
			</div>

			<div className={cls.error}>{errors.avatar?.message}</div>
		</div>
	);
};
