import { Input } from '@/shared';
import ClearIcon from '@/shared/assets/icons/cross.svg?react';
import React, { useState } from 'react';
import cls from './searchInput.module.scss';

export const SearchInput = () => {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleClear = () => {
		setSearchValue('');
	};

	return (
		<div className={cls.searchContainer}>
			<Input
				type='SkillSearch'
				placeholder='Искать навык'
				value={searchValue}
				onChange={handleChange}
				icon={
					searchValue
						? {
								Svg: ClearIcon,
								onClick: handleClear,
								'aria-label': 'Очистить поле поиска',
							}
						: undefined
				}
				className={cls.searchInput}
			/>
		</div>
	);
};
