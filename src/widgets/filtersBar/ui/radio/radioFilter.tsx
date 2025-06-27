import styles from './radioFilter.module.scss';

interface RadioFilterProps {
	title?: string;
	name?: string;
	options: { label: string }[];
	selectedValue: string;
	onChange: (value: string) => void;
}

export const RadioFilter = ({
	title,
	name = 'radio-filter',
	options,
	selectedValue,
	onChange,
}: RadioFilterProps) => {
	return (
		<div className={styles.container}>
			{title && <h3 className={styles.title}>{title}</h3>}
			<div className={styles.options}>
				{options.map(({ label }, index) => {
					const inputId = `${name}-${index}`;
					return (
						<label key={inputId} htmlFor={inputId} className={styles.label}>
							<input
								type='radio'
								id={inputId}
								name={name}
								value={label}
								checked={selectedValue === label}
								onChange={() => onChange(label)}
								className={styles.input}
							/>
							<span className={styles.radioIndicator} />
							<span className={styles.labelText}>{label}</span>
						</label>
					);
				})}
			</div>
		</div>
	);
};
