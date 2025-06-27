import { userSelectors } from '@/entities';
import { SearchInput } from '@/features/searchInput/ui/searchInput';
import { Button, Logo, ROUTES, useTypedSelector } from '@/shared';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { AdditionalButtons } from './additionalButtons';
import { AuthBlock } from './authBlock';
import cls from './header.module.scss';
import { NavMenu } from './navMenu';
import type { HeaderProps } from './type';

export const Header = ({ appearance = 'primary', className }: HeaderProps) => {
	const navigate = useNavigate();

	const user = useTypedSelector(userSelectors.data);

	const handleClose = () => {
		navigate(-1);
	};

	if (appearance === 'pure') {
		return (
			<header className={clsx(cls.header, className)}>
				<div className={cls.container_pure}>
					<Link to={ROUTES.SKILLS}>
						<Logo text='SkillSwap' />
					</Link>

					<div>
						<Button onClick={handleClose} appearance='tertiary'>
							Закрыть
						</Button>
					</div>
				</div>
			</header>
		);
	}

	return (
		<header className={cls.header}>
			<div className={cls.container}>
				<Link to={ROUTES.SKILLS}>
					<Logo text='SkillSwap' />
				</Link>

				<NavMenu />
				<SearchInput />

				<AdditionalButtons isAuth={Boolean(user)} />

				<AuthBlock user={user} />
			</div>
		</header>
	);
};
