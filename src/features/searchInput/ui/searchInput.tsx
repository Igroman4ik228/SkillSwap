import { Input } from '@/shared';
import ClearIcon from '@/shared/assets/icons/cross.svg?react';
import React, { useState } from 'react';
import styles from './searchInput.module.scss';

export const SearchInput = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleClear = () => {
		setSearchValue('');
	};

	return (
		<div className={styles.searchContainer}>
			<Input
				type='SkillSearch'
				placeholder='Искать навык'
				value={searchValue}
				onChange={handleChange}
				icon={
					searchValue
						? {
								svg: ClearIcon,
								onClick: handleClear,
								'aria-label': 'Очистить поле поиска',
							}
						: undefined
				}
				className={styles.searchInput}
			/>
		</div>
	);
};
