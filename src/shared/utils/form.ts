import type { FieldError } from 'react-hook-form';

export type ErrorMessage = {
	error?: boolean;
	errorText?: string;
};

export const getErrorMessage = (error?: FieldError): ErrorMessage => ({
	error: !!error,
	errorText: error?.message,
});
