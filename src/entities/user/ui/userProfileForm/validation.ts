import * as yup from 'yup';

export const profileSchema = yup.object({
	email: yup
		.string()
		.matches(
			/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
			'Некорректный email'
		)
		.required('Обязательное поле'),
	name: yup.string().required('Обязательное поле'),
	bornDate: yup.string().required('Обязательное поле'),
	gender: yup.string().required('Обязательное поле'),
	city: yup.string().required('Обязательное поле'),
	description: yup.string().required('Обязательное поле'),
});
