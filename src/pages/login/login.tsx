import { Button, Input, PasswordInput, ROUTES } from '@/shared';
import { Link } from 'react-router-dom';
import LightBulbIcon from '@/shared/assets/icons/light-bulb.svg?react';
import AppleIcon from '@/shared/assets/icons/apple.svg?react';
import GoogleIcon from '@/shared/assets/icons/google.svg?react';
import cls from './login.module.scss';

export const LoginPage = () => {
	return (
		<div className={cls.loginPage}>
			<div className={cls.wrapperLogin}>
				<div className={cls.loginVariants}>
					<div className={cls.external}>
						<Button appearance='secondary'>
							<div className={cls.externalBtn}>
								<GoogleIcon />
								<span>Продолжение с Google</span>
							</div>
						</Button>
						<Button appearance='secondary'>
							<div className={cls.externalBtn}>
								<AppleIcon /> <span>Продолжение с Apple</span>
							</div>
						</Button>
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
				<LightBulbIcon />
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
