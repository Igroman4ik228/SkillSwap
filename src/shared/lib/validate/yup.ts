import { VALIDATION_MESSAGES } from '@/shared/const/validation';
import * as yup from 'yup';

yup.setLocale({
	mixed: {
		required: VALIDATION_MESSAGES.REQUIRED,
	},
	string: {
		email: VALIDATION_MESSAGES.EMAIL_FORMAT,
		datetime: VALIDATION_MESSAGES.DATE_FORMAT,
	},
});

export { yup };
export default yup;
