import clsx from 'clsx';
import cls from './checkboxFilter.module.scss';

interface CheckboxFilterProps {
	title?: string;
	options: { label: string }[];
	checkedValues: string[];
	onChange: (label: string) => void;
	isSubcategory?: boolean;
}

export const CheckboxFilter = ({
	title,
	options,
	checkedValues,
	onChange,
	isSubcategory = false,
}: CheckboxFilterProps) => {
	return (
		<div className={clsx(cls.filter, isSubcategory && cls.subcategory)}>
			{title && <h3 className={cls.title}>{title}</h3>}
			<div className={cls.options}>
				{options.map(({ label }) => {
					const inputId = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;
					return (
						<label key={inputId} htmlFor={inputId} className={cls.label}>
							<input
								type='checkbox'
								id={inputId}
								className={cls.input}
								checked={checkedValues.includes(label)}
								onClick={(e) => e.stopPropagation()}
								onChange={() => onChange(label)}
							/>
							<span className={cls.box} />
							<span className={cls.text}>{label}</span>
						</label>
					);
				})}
			</div>
		</div>
	);
};
