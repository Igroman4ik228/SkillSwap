import { RouterLinkButton, ROUTES, useClickOutsideToggle } from '@/shared';
import { UserDropdown } from '@/shared/ui/userDropdown';
import cls from './authBlock.module.scss';
import type { AuthBlockProps } from './type';

export const AuthBlock = ({ user }: AuthBlockProps) => {
	const {
		isVisible: isDropdownOpen,
		toggleVisibility: toggleDropdown,
		ref,
	} = useClickOutsideToggle(!user);

	if (user) {
		return (
			<div className={cls.userWrapper} ref={ref}>
				<button className={cls.user} onClick={toggleDropdown} type='button'>
					<p>{user.name}</p>
					<div className={cls.avatar}>
						<img src={user.avatar} alt='аватарка' />
					</div>
				</button>
				{isDropdownOpen && <UserDropdown />}
			</div>
		);
	}

	return (
		<div className={cls.authButtons}>
			<RouterLinkButton to={ROUTES.LOGIN} appearance='secondary'>
				Войти
			</RouterLinkButton>
			<RouterLinkButton to={ROUTES.REGISTER}>
				Зарегистрироваться
			</RouterLinkButton>
		</div>
	);
};
