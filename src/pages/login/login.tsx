import { Button, Input, PasswordInput, ROUTES } from '@/shared';
import { Link } from 'react-router-dom';
import LightBulb from '@/shared/assets/icons/light-bulb.svg?react';
import cls from './login.module.scss';

export const LoginPage = () => {
	return (
		<div className={cls.loginPage}>
			<div className={cls.wrapperLogin}>
				<div className={cls.loginVariants}>
					<div className={cls.external}>
						<Button appearance='secondary'>Продолжение с Google</Button>
						<Button appearance='secondary'>Продолжение с Apple</Button>
					</div>

					<div>или</div>

					<div className={cls.fields}>
						<Input placeholder='Введите email' />
						<PasswordInput placeholder='Введите ваш пароль' />
					</div>
				</div>

				<div className={cls.wrapperBtn}>
					<Button>Войти</Button>
					<Link className={cls.registerLink} to={ROUTES.REGISTER}>
						Зарегистрироваться
					</Link>
				</div>
			</div>

			<div className={cls.wrapperWelcome}>
				<LightBulb />
				<div className={cls.welcomeContent}>
					<h2 className={cls.welcomeTitle}>С возвращением в SkillSwap!</h2>

					<p className={cls.welcomeText}>
						Обменивайтесь знаниями и навыками с другими людьми
					</p>
				</div>
			</div>
		</div>
	);
};
