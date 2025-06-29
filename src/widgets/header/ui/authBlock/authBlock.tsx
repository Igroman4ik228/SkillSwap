import { Button, ROUTES, useDropdown } from '@/shared';
import { useNavigate } from 'react-router-dom';
import { UserDropdown } from '@/shared/ui/userDropdown';
import cls from './authBlock.module.scss';
import type { AuthBlockProps } from './type';

export const AuthBlock = ({ user }: AuthBlockProps) => {
	const navigate = useNavigate();
	const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

	const handleOpenSignIn = () => navigate(ROUTES.LOGIN);
	const handleOpenSignUp = () => navigate(ROUTES.REGISTER);

	if (user) {
		return (
			// eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
			<div className={cls.user} onClick={toggleDropdown} ref={dropdownRef}>
				<p>{user.name}</p>
				<div className={cls.avatar}>
					<img src={user.avatar} alt='аватарка' />
				</div>
				{isOpen && <UserDropdown />}
			</div>
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
