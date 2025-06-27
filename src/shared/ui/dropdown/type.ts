export type DropdownOption = {
	label: string;
	value: string | number;
};

export type SingleDropdownProps = {
	isMultiple: false;
	value?: DropdownOption;
	onChange: (value: DropdownOption | undefined) => void;
};

export type MultipleDropdownProps = {
	isMultiple: true;
	value: DropdownOption[];
	onChange: (value: DropdownOption[]) => void;
};

export type DropdownProps = {
	options: DropdownOption[];
	title: string;
	placeholder?: string;
	widthVariant?: boolean;
	error?: boolean;
	errorText?: string;
} & (SingleDropdownProps | MultipleDropdownProps);

export const EMPTY_OPTION: DropdownOption = { label: 'Не указан', value: '' };
