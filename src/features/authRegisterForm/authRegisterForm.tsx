import { Button, Input, PasswordInput } from '@/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import cls from './authRegisterForm.module.scss';
import type { AuthRegisterFormProps, FormValues } from './type';

const schema = yup.object().shape({
	email: yup.string().email('Некорректный email').required('Email обязателен'),
	password: yup
		.string()
		.min(8, 'Пароль должен содержать не менее 8 знаков')
		.required('Пароль обязателен'),
});

export const AuthRegisterForm = ({
	onSubmitHandler,
}: AuthRegisterFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const passwordValue = watch('password');

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)}>
			<div className={cls.wrapper}>
				<Button>Продолжить с Google</Button>
				<Button>Продолжить с Apple</Button>
			</div>

			<div className={cls.textDivider}>
				<hr className={cls.line} />
				<span className={cls.text}>или</span>
				<hr className={cls.line} />
			</div>

			<div className={`${cls.wrapper} ${cls.inputMB}`}>
				{/* Email */}
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<Input
							title='Email'
							type='email'
							placeholder='Введите email'
							{...field}
							error={!!errors.email}
							errorText={errors.email?.message}
						/>
					)}
				/>

				{/* Пароль */}
				<Controller
					name='password'
					control={control}
					render={({ field }) => (
						<div className={cls.inputGroup}>
							<PasswordInput
								title='Пароль'
								id='password'
								placeholder='Придумайте надёжный пароль'
								{...field}
							/>
							<div className={cls.passwordHint}>
								{passwordValue?.length >= 8
									? 'Надёжный'
									: 'Пароль должен содержать не менее 8 знаков'}
							</div>
						</div>
					)}
				/>
			</div>

			<Button
				type='submit'
				className={`${cls.btnSubmit} ${!isValid ? cls.btnDisabled : ''}`}
				disabled={!isValid}
			>
				Далее
			</Button>
		</form>
	);
};
