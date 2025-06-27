import CheckboxDone from '@/shared/assets/icons/checkbox-checked.svg?react';
import CheckboxEmpty from '@/shared/assets/icons/checkbox-empty.svg?react';
import ArrowClose from '@/shared/assets/icons/chevron-down.svg?react';
import ArrowOpen from '@/shared/assets/icons/chevron-up.svg?react';
import Сross from '@/shared/assets/icons/cross.svg?react';
import clsx from 'clsx';
import {
	useCallback,
	useEffect,
	useId,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Icon } from '../icon';
import { Input } from '../input';
import cls from './dropdown.module.scss';
import { EMPTY_OPTION, type DropdownOption, type DropdownProps } from './type';

export const Dropdown = ({
	isMultiple,
	value,
	onChange,
	options,
	placeholder,
	title,
	widthVariant = true,
	error,
	errorText,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [isTyping, setIsTyping] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const id = useId();

	const errorId = `${id}-error`;

	const isSingle = !isMultiple;

	const optionsWithEmpty = useMemo(() => {
		return isMultiple ? options : [EMPTY_OPTION, ...options];
	}, [isMultiple, options]);

	const filteredOptions = optionsWithEmpty.filter((item) =>
		item.label.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const selectOption = useCallback(
		(option: DropdownOption) => {
			if (isMultiple) {
				if (value.some((item) => item.value === option.value)) {
					onChange(value.filter((item) => item.value !== option.value));
				} else {
					onChange([...value, option]);
				}
			} else if (option.value === '') {
				onChange(undefined);
			} else {
				onChange(option);
			}
		},
		[isMultiple, value, onChange]
	);

	const isOptionSelected = (option: DropdownOption) => {
		return isMultiple
			? value.some((item) => item.value === option.value)
			: (value as DropdownOption | undefined)?.value === option.value;
	};

	const renderLabel = () => {
		if (isMultiple) {
			const selected = value as DropdownOption[];
			return selected.length > 0 ? `Выбрано: ${selected.length}` : placeholder;
		}
		const selectedOption = value as DropdownOption | undefined;
		return selectedOption?.value ? selectedOption.label : placeholder;
	};

	useEffect(() => {
		if (isOpen) setHighlightedIndex(0);
	}, [isOpen]);

	useEffect(() => {
		const input = inputRef.current;

		if (isTyping && inputRef.current) {
			if (input) {
				input.focus();
			}
		}
	}, [isTyping]);

	useEffect(() => {
		const container = containerRef.current;

		const handler = (evt: KeyboardEvent) => {
			if (!container?.contains(evt.target as Node)) return;

			switch (evt.code) {
				case 'Enter':
				case 'Space': {
					setIsOpen((prev) => !prev);
					if (isOpen) selectOption(optionsWithEmpty[highlightedIndex]);
					break;
				}

				case 'ArrowUp':
				case 'ArrowDown': {
					evt.preventDefault();
					if (!isOpen) {
						setIsOpen(true);
						break;
					}

					const newValue =
						highlightedIndex + (evt.code === 'ArrowDown' ? 1 : -1);

					if (newValue >= 0 && newValue < optionsWithEmpty.length) {
						setHighlightedIndex(newValue);
					}
					break;
				}

				case 'Escape':
					setIsOpen(false);
					break;

				default:
					if (/^[a-zA-Zа-яА-Я0-9]$/.test(evt.key) && isSingle) {
						setIsTyping(true);
						setIsOpen(true);
					}
					break;
			}
		};

		if (container) {
			container?.addEventListener('keydown', handler);
		}

		return () => {
			if (container) {
				container?.removeEventListener('keydown', handler);
			}
		};
	}, [isOpen, highlightedIndex, optionsWithEmpty, selectOption, isSingle]);

	return (
		<div className={clsx(cls.container, { [cls.fullWidth]: widthVariant })}>
			<label className={cls.labelText} htmlFor={id}>
				{title}
			</label>
			<div
				ref={containerRef}
				tabIndex={0}
				onKeyDown={() => {}}
				className={clsx(
					cls.dropdown,
					isOpen && cls.open,
					isSingle && cls.searchableSingle,
					error && cls.field_error
				)}
				id={id}
				role='combobox'
				aria-expanded={isOpen}
				aria-haspopup='listbox'
				aria-controls={`${id}-listbox`}
				aria-invalid={error}
				aria-describedby={error ? errorId : undefined}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				{isSingle && isTyping ? (
					<div className={cls.inputWrapper}>
						<Input
							className={cls.searchInput}
							ref={inputRef}
							type='text'
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setIsTyping(true);
							}}
							icon={{
								onClick: (e) => {
									e?.stopPropagation();
									setSearchTerm('');
									setIsTyping(false);
									setIsOpen(false);
								},
								svg: Сross,
							}}
						/>
					</div>
				) : (
					<div className={clsx(cls.valueWrapper, isOpen && cls.open)}>
						<span className={cls.value}>{renderLabel()}</span>
						<Icon Svg={isOpen ? ArrowOpen : ArrowClose} />
					</div>
				)}

				<div className={cls.optionsWrapper}>
					<ul className={cls.options} id={`${id}-listbox`} role='listbox'>
						{isMultiple
							? filteredOptions.map((option, index) => (
									<li
										className={clsx(
											cls.option,
											index === highlightedIndex && cls.highlighted
										)}
										key={option.value}
										onKeyDown={() => {}}
										tabIndex={0}
										role='option'
										aria-selected={isOptionSelected(option)}
										onClick={(e) => {
											e.stopPropagation();
											selectOption(option);
											setIsOpen(false);
										}}
										onMouseEnter={() => setHighlightedIndex(index)}
									>
										<div className={cls.checkboxWrapper}>
											<Icon
												Svg={
													isOptionSelected(option)
														? CheckboxDone
														: CheckboxEmpty
												}
											/>
											<span className={cls.checkboxLabel}>{option.label}</span>
										</div>
									</li>
								))
							: filteredOptions.map((option, index) => (
									<li
										className={clsx(
											cls.option,
											index === highlightedIndex && cls.highlighted
										)}
										onKeyDown={() => {}}
										key={option.value}
										tabIndex={0}
										role='option'
										aria-selected={isOptionSelected(option)}
										onClick={(e) => {
											e.stopPropagation();
											selectOption(option);
											setIsOpen(false);
											setIsTyping(false);
											setSearchTerm('');
										}}
										onMouseEnter={() => setHighlightedIndex(index)}
									>
										<span className={cls.checkboxLabel}>{option.label}</span>
									</li>
								))}
					</ul>
				</div>
			</div>
			{errorText && (
				<p
					className={clsx(
						cls.dropdownErrorText,
						error && cls.dropdownErrorText_active
					)}
					role='alert'
					id={errorId}
				>
					{errorText}
				</p>
			)}
		</div>
	);
};

// const [selectedOption, setSelectedOption] =  useState<DropdownOption[]>([]);
// const [selectedOption, setSelectedOption] = useState<
// 	DropdownOption | undefined
// >(undefined);
