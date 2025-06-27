import { Button, ROUTES } from '@/shared';
import { Link, useNavigate } from 'react-router-dom';
import cls from './authBlock.module.scss';
import type { AuthBlockProps } from './type';

export const AuthBlock = ({ user }: AuthBlockProps) => {
	const navigate = useNavigate();

	const handleOpenSignIn = () => navigate(ROUTES.LOGIN);
	const handleOpenSignUp = () => navigate(ROUTES.REGISTER);

	if (user) {
		return (
			<Link className={cls.user} to={ROUTES.PROFILE}>
				<p>{user.name}</p>
				<div className={cls.avatar}>
					<img src={user.avatar} alt='аватарка' />
				</div>
			</Link>
		);
	}

	return (
		<div className={cls.authButtons}>
			<Button onClick={handleOpenSignIn} appearance='secondary'>
				Войти
			</Button>
			<Button onClick={handleOpenSignUp}>Зарегистрироваться</Button>
		</div>
	);
};
