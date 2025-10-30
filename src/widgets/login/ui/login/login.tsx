import { LoginExternal, LoginForm } from '@/features';
import cls from './login.module.scss';

export const Login = () => {
	return (
		<div className={cls.login}>
			<LoginExternal />

			<div className={cls.or}>или</div>

			<LoginForm />
		</div>
	);
};
