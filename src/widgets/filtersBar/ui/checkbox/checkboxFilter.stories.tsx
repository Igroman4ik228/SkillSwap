import { useState } from 'react';
import { CheckboxFilter } from './checkboxFilter';

export default {
	title: 'Widgets/FiltersBar/CheckboxFilter',
	component: CheckboxFilter,
};

export const Default = () => {
	const [checked, setChecked] = useState<string[]>([]);

	const handleChange = (label: string) => {
		setChecked((prev) =>
			prev.includes(label)
				? prev.filter((item) => item !== label)
				: [...prev, label]
		);
	};

	return (
		<CheckboxFilter
			options={[
				{ label: 'Опция 1' },
				{ label: 'Опция 2' },
				{ label: 'Опция 3' },
			]}
			checkedValues={checked}
			onChange={handleChange}
		/>
	);
};

export const WithSubcategories = () => {
	const [checked, setChecked] = useState<string[]>([]);

	const handleChange = (label: string) => {
		setChecked((prev) =>
			prev.includes(label)
				? prev.filter((item) => item !== label)
				: [...prev, label]
		);
	};

	return (
		<CheckboxFilter
			options={[{ label: 'Подкатегория 1' }, { label: 'Подкатегория 2' }]}
			checkedValues={checked}
			onChange={handleChange}
			isSubcategory
		/>
	);
};
