import { updateUserAvatar } from '@/entities';
import { Icon } from '@/shared';
import GalleryEdit from '@/shared/assets/icons/gallery-edit.svg?react';
import { useTypedDispatch, useTypedSelector } from '@/shared/hooks/store';
import { useRef } from 'react';
import cls from './changeAvatar.module.scss';

export const ChangeAvatarForm = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const avatarUrl = useTypedSelector((state) => state.user.data?.avatar);
	const dispatch = useTypedDispatch();

	const handleIconClick = () => {
		inputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			dispatch(updateUserAvatar(file.name));
		}
	};

	return (
		<div className={cls.avatarWrapper}>
			<div className={cls.avatarBackground}>
				<img src={avatarUrl} alt='Аватар' className={cls.avatar} />
			</div>

			<div className={cls.wrapperBtn}>
				<Icon
					Svg={GalleryEdit}
					onClick={handleIconClick}
					className={cls.editBtn}
				/>
				<input
					ref={inputRef}
					style={{ display: 'none' }}
					type='file'
					accept='image/*'
					onChange={handleFileChange}
				/>
			</div>
		</div>
	);
};
