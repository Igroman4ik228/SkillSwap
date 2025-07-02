import * as yup from 'yup';

export const personalDataSchema = yup.object({
	name: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.min(3, 'Минимум 3 символа')
		.max(50, 'Максимум 50 символов'),

	dateOfBirth: yup
		.date()
		.max(new Date(), 'Дата рождения не может быть в будущем')
		.required('Введите корректную дату'),

	sex: yup
		.string()
		.oneOf(['male', 'female'], 'Выберите пол')
		.required('Обязательное поле'),

	city: yup
		.string()
		.trim()
		.min(2, 'Минимум 2 символа')
		.max(50, 'Максимум 50 символов')
		.nullable(),

	categoriesToLearn: yup
		.array()
		.of(yup.string().required('Обязательный выбор категории'))
		.min(1, 'Выберите хотя бы одну категорию'),

	subcategoriesToLearn: yup
		.array()
		.of(yup.string().required('Обязательный выбор подкатегории'))
		.min(1, 'Выберите хотя бы одну подкатегорию'),
});
