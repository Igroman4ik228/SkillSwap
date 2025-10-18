import clsx from 'clsx';
import { useState } from 'react';
import { CheckboxFilter } from './checkbox';
import cls from './filtersBar.module.scss';
import { cities, skills } from './mockData';
import { RadioFilter } from './radio';

export const FiltersBar = () => {
	const [demand, setDemand] = useState('Все');
	const [checkedSkills, setCheckedSkills] = useState<string[]>([]);
	const [showAllSkills, setShowAllSkills] = useState(false);
	const [authorGender, setAuthorGender] = useState('Любой');
	const [checkedCities, setCheckedCities] = useState<string[]>([]);
	const [showAllCities, setShowAllCities] = useState(false);
	const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>(
		{}
	);

	const toggleSkill = (label: string) => {
		setCheckedSkills((prev) =>
			prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
		);
	};

	const toggleSkillCategory = (categoryLabel: string) => {
		setExpandedSkills((prev) => ({
			...prev,
			[categoryLabel]: !prev[categoryLabel],
		}));

		if (!expandedSkills[categoryLabel]) {
			setCheckedSkills((prev) =>
				prev.includes(categoryLabel) ? prev : [...prev, categoryLabel]
			);
		} else {
			setCheckedSkills((prev) =>
				prev.filter((label) => label !== categoryLabel)
			);
		}
	};

	const toggleCity = (label: string) => {
		setCheckedCities((prev) =>
			prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
		);
	};

	return (
		<div className={cls.container}>
			<h2 className={cls.title}>Фильтры</h2>

			<section className={cls.section}>
				<RadioFilter
					options={[
						{ label: 'Все' },
						{ label: 'Хочу научиться' },
						{ label: 'Могу научить' },
					]}
					selectedValue={demand}
					onChange={setDemand}
				/>
			</section>

			<section className={cls.section}>
				<h3 className={cls.groupTitle}>Навыки</h3>

				{(showAllSkills ? skills : skills.slice(0, 6)).map((category) => (
					<div key={category.label} className={cls.skillCategory}>
						<div
							className={cls.skillCategoryHeader}
							onClick={() => toggleSkillCategory(category.label)}
							role='button'
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									toggleSkillCategory(category.label);
								}
							}}
						>
							<CheckboxFilter
								options={[{ label: category.label }]}
								checkedValues={checkedSkills}
								onChange={() => {}} // Можно оставить пустым или убрать, чтобы не дублировался
								isSubcategory
							/>
							<span
								className={clsx(cls.expandButton, {
									[cls.expanded]: expandedSkills[category.label],
								})}
								aria-hidden='true'
							/>
						</div>

						{expandedSkills[category.label] && category.subcategories && (
							<div className={cls.subcategories}>
								<CheckboxFilter
									options={category.subcategories.map((label) => ({ label }))}
									checkedValues={checkedSkills}
									onChange={toggleSkill}
								/>
							</div>
						)}
					</div>
				))}

				<button
					type='button'
					className={cls.toggleButton}
					onClick={() => setShowAllSkills(!showAllSkills)}
				>
					Все категории
					<span
						className={clsx(cls.expandIcon, {
							[cls.expanded]: showAllSkills,
						})}
					/>
				</button>
			</section>

			<section className={cls.section}>
				<h3 className={cls.groupTitle}>Пол автора</h3>
				<RadioFilter
					name='authorGender'
					options={[
						{ label: 'Мужской' },
						{ label: 'Женский' },
						{ label: 'Любой' },
					]}
					selectedValue={authorGender}
					onChange={setAuthorGender}
				/>
			</section>

			<section className={cls.section}>
				<h3 className={cls.groupTitle}>Город</h3>
				<CheckboxFilter
					options={showAllCities ? cities : cities.slice(0, 5)}
					checkedValues={checkedCities}
					onChange={toggleCity}
				/>
				<button
					type='button'
					className={cls.toggleButton}
					onClick={() => setShowAllCities(!showAllCities)}
				>
					Все города
					<span
						className={clsx(cls.expandIcon, {
							[cls.expanded]: showAllCities,
						})}
					/>
				</button>
			</section>
		</div>
	);
};
