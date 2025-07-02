import { Button, Input } from '@/shared';
// import { Dropdown } from '@/shared/ui/dropdown';
import { FormWrapper } from '@/shared/ui/formWrapper';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Controller, useForm } from 'react-hook-form';
import cls from './personalDataForm.module.scss';
// import { personalDataSchema } from './schema';

export const PersonalDataForm = () => {
	// const {
	// 	register,
	// 	control,
	// 	formState: { errors },
	// } = useForm({
	// 	resolver: yupResolver(personalDataSchema),
	// });

	// const sex = [
	// 	{ value: 1, label: 'Мужской' },
	// 	{ value: 2, label: 'Женский' },
	// ];

	return (
		<FormWrapper>
			<Input title='Имя' placeholder='Введите ваше имя' />
			{/* <div>
				TODO: Добавить компонент даты
				<Controller
					name='sex'
					control={control}
					render={({ field }) => (
						<Dropdown
							isMultiple={false}
							value={sex[0]}
							options={sex}
							onChange={(item) => field.onChange(item?.value)}
							title='Пол'
							error={!!errors.sex}
							errorText={errors.sex?.message}
						/>
					)}
				/>
			</div>
			<Controller
				name='city'
				control={control}
				render={() => (
					<Dropdown
						isMultiple={false}
						widthVariant
						value={}
						options={}
						onChange={}
						title='Город'
						error={!!errors.city}
						errorText={errors.city?.message}
					/>
				)}
			/>
			<Controller
				name='categoriesToLearn'
				control={control}
				render={() => (
					<Dropdown
						isMultiple={false}
						widthVariant
						value={}
						options={}
						onChange={}
						title='Категория навыка, которому хотите научиться'
						placeholder='Выберите категорию'
						error={}
						errorText={}
					/>
				)}
			/>
			<Controller
				name='subcategoriesToLearn'
				control={control}
				render={() => (
					<Dropdown
						isMultiple={false}
						widthVariant
						value={}
						options={}
						onChange={}
						title='Подкатегория навыка, которому хотите научиться'
						placeholder='Выберите подкатегорию'
						error={}
						errorText={}
					/>
				)}
			/> */}
			<div className={cls.buttonWrapper}>
				<Button appearance='secondary' fullWidth>
					Назад
				</Button>
				<Button appearance='primary' fullWidth>
					Продолжить
				</Button>
			</div>
		</FormWrapper>
	);
};
