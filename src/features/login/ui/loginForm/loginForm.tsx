import {
	Button,
	getErrorMessage,
	Input,
	PasswordInput,
	ROUTES,
	useTypedDispatch,
} from '@/shared';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUser } from '@/entities';
import cls from './loginForm.module.scss';
import { loginFormSchema, type LoginFormData } from '../../model/validation';

export const LoginForm = () => {
	const dispatch = useTypedDispatch();

	const {
		handleSubmit,
		register,
		setError,
		formState: { errors, isDirty, isSubmitting, isValid },
	} = useForm<LoginFormData>({
		resolver: yupResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
		shouldUseNativeValidation: false,
	});

	const onSubmit = handleSubmit(async (data: LoginFormData) => {
		try {
			const user = await dispatch(loginUser(data)).unwrap();
			if (!user) {
				setError('root', {
					type: 'manual',
					message:
						'Email или пароль введён неверно. Пожалуйста проверьте правильность введённых данных',
				});
			}
		} catch (error) {
			setError('root', {
				type: 'manual',
				message:
					'Email или пароль введён неверно. Пожалуйста проверьте правильность введённых данных',
			});
		}
	});

	const isButtonDisable = !isDirty || isSubmitting || !isValid;

	return (
		<form className={cls.loginForm} onSubmit={onSubmit}>
			<div className={cls.wrapperFields}>
				<div className={cls.fields}>
					<Input
						type='email'
						title='Email'
						placeholder='Введите email'
						{...register('email')}
						{...getErrorMessage(errors.email)}
					/>
					<PasswordInput
						title='Пароль'
						placeholder='Введите ваш пароль'
						{...register('password')}
						{...getErrorMessage(errors.password)}
					/>
				</div>
				{errors.root && <div className={cls.error}>{errors.root.message}</div>}
			</div>

			<div className={cls.wrapperBtn}>
				<Button type='submit' disabled={isButtonDisable}>
					{isSubmitting ? 'Вход...' : 'Вход'}
				</Button>
				<Link to={ROUTES.REGISTER} className={cls.registerLink}>
					Зарегистрироваться
				</Link>
			</div>
		</form>
	);
};
