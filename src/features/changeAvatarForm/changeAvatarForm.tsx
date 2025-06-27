import { updateUserAvatar } from '@/entities';
import { Icon } from '@/shared';
import GalleryEdit from '@/shared/assets/icons/gallery-edit.svg?react';
import { useTypedDispatch, useTypedSelector } from '@/shared/hooks/store';
import { useRef } from 'react';
import styles from './changeAvatar.module.scss';

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
		<div className={styles.avatarWrapper}>
			<div className={styles.avatarBackground}>
				<img src={avatarUrl} alt='Аватар' className={styles.avatar} />
			</div>

			<div className={styles.wrapperBtn}>
				<Icon
					Svg={GalleryEdit}
					onClick={handleIconClick}
					className={styles.editBtn}
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
