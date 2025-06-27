import { ROUTES } from '@/shared';
import { Link } from 'react-router-dom';
import cls from './navMenu.module.scss';

export const NavMenu = () => (
	<nav className={cls.menu}>
		<ul className={cls.list}>
			<li>
				<Link to={ROUTES.SKILLS}>О проекте</Link>
			</li>
			<li>
				<Link to={ROUTES.SKILLS}>Все навыки</Link>
			</li>
		</ul>
	</nav>
);
