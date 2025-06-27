import { Button, Input } from '@/shared';
import { Dropdown } from '@/shared/ui/dropdown';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { DragAndDrop } from '@/shared/ui/dragAndDrop';
import { skillSchema } from './schema';
import cls from './skillForm.module.scss';
import type { TSkillForm } from './type';

export const SkillForm = () => {
	const Optionms = [
		{ label: 'hi', value: 1 },
		{ label: 'man', value: 2 },
	];

	const {
		register,
		control,
		formState: { errors },
	} = useForm<TSkillForm>({
		resolver: yupResolver(skillSchema),
	});

	// const submitForm = (data: TSkillForm) => {
	// 	console.log({ data });
	// };
	// TODO: Нужно поменять тег формы на Компонент AuthContainer

	return (
		<form>
			<div className={cls.container}>
				<Input
					title='Название навыка'
					placeholder='Введите название вашего навыка'
					{...register('title')}
					error={!!errors.title}
					errorText={errors.title?.message}
				/>
				<Controller
					name='category'
					control={control}
					render={({ field }) => (
						<Dropdown
							isMultiple={false}
							widthVariant
							value={Optionms.find(
								(opt) => String(opt.value) === String(field.value)
							)}
							options={Optionms}
							onChange={(item) => field.onChange(item?.value)}
							title='Категория навыка'
							placeholder='Выберите категорию навыка'
							error={!!errors.category}
							errorText={errors.category?.message}
						/>
					)}
				/>
				<Controller
					name='subcategory'
					control={control}
					render={({ field }) => (
						<Dropdown
							isMultiple={false}
							widthVariant
							value={Optionms.find(
								(opt) => String(opt.value) === String(field.value)
							)}
							options={Optionms}
							onChange={(item) => field.onChange(item?.value)}
							title='Подкатегория навыка'
							placeholder='Выберите подкатегорию навыка'
							error={!!errors.subcategory}
							errorText={errors.subcategory?.message}
						/>
					)}
				/>
				{/* TextArea Заменить надо будет */}
				<DragAndDrop />
				<div className={cls.buttonWrapper}>
					<Button appearance='secondary' fullWidth>
						Назад
					</Button>
					<Button appearance='primary' fullWidth>
						Продолжить
					</Button>
				</div>
			</div>
		</form>
	);
};
