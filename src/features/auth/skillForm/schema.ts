import * as yup from 'yup';

export const skillSchema = yup.object({
	title: yup.string().trim().min(3, '').max(50).required('Обязательное поле'),
	category: yup
		.string()
		.required('Выберите категорию')
		.notOneOf(['', null], 'Выберите категорию'),
	subcategory: yup
		.string()
		.required('Выберите категорию')
		.notOneOf(['', null], 'Выберите категорию'),
	description: yup.string().trim().required('Обязательное поле').min(500, ''),
	image: yup
		.mixed<File>()
		.required('Изображение обязательно')
		.test('fileSize', 'Файл должен быть не больше 2MB', (value) => {
			return value && value.size <= 2 * 1024 * 1024;
		})
		.test('fileType', 'Только изображения формата JPEG или PNG', (value) => {
			return value && ['image/jpeg', 'image/png'].includes(value.type);
		}),
});
