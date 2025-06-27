import clsx from 'clsx';
import styles from './checkboxFilter.module.scss';

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
		<div className={clsx(styles.filter, isSubcategory && styles.subcategory)}>
			{title && <h3 className={styles.title}>{title}</h3>}
			<div className={styles.options}>
				{options.map(({ label }) => {
					const inputId = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;
					return (
						<label key={inputId} htmlFor={inputId} className={styles.label}>
							<input
								type='checkbox'
								id={inputId}
								className={styles.input}
								checked={checkedValues.includes(label)}
								onClick={(e) => e.stopPropagation()}
								onChange={() => onChange(label)}
							/>
							<span className={styles.box} />
							<span className={styles.text}>{label}</span>
						</label>
					);
				})}
			</div>
		</div>
	);
};
