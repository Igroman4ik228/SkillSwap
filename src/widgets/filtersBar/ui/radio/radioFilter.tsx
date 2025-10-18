import cls from './radioFilter.module.scss';

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
		<div className={cls.container}>
			{title && <h3 className={cls.title}>{title}</h3>}
			<div className={cls.options}>
				{options.map(({ label }, index) => {
					const inputId = `${name}-${index}`;
					return (
						<label key={inputId} htmlFor={inputId} className={cls.label}>
							<input
								type='radio'
								id={inputId}
								name={name}
								value={label}
								checked={selectedValue === label}
								onChange={() => onChange(label)}
								className={cls.input}
							/>
							<span className={cls.radioIndicator} />
							<span className={cls.labelText}>{label}</span>
						</label>
					);
				})}
			</div>
		</div>
	);
};
