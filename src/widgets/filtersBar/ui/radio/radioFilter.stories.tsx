import { useState } from 'react';
import { RadioFilter } from './radioFilter';

export default {
	title: 'Widgets/FiltersBar/RadioFilter',
	component: RadioFilter,
};

export const Default = () => {
	const [selected, setSelected] = useState('Опция 1');

	return (
		<RadioFilter
			options={[
				{ label: 'Опция 1' },
				{ label: 'Опция 2' },
				{ label: 'Опция 3' },
			]}
			selectedValue={selected}
			onChange={setSelected}
		/>
	);
};
