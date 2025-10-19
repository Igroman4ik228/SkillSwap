import { Logo, ROUTES } from '@/shared';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import cls from './footer.module.scss';
import type { FooterProps } from './type';

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={clsx(cls.footer, className)}>
			<div className={cls.container}>
				<Link to={ROUTES.SKILLS} className={cls.logo}>
					<Logo text='SkillSwap' />
				</Link>
				<nav className={cls.nav}>
					<ul className={cls.column}>
						<li>
							<Link to={ROUTES.SKILLS}>О проекте</Link>
						</li>
						<li>
							<Link to={ROUTES.SKILLS}>Все навыки</Link>
						</li>
					</ul>
					<ul className={cls.column}>
						<li>
							<Link to={ROUTES.SKILLS}>Контакты</Link>
						</li>
						<li>
							<Link to={ROUTES.SKILLS}>Блог</Link>
						</li>
					</ul>
					<ul className={cls.column}>
						<li>
							<Link to={ROUTES.SKILLS}>Политика конфиденциальности</Link>
						</li>
						<li>
							<Link to={ROUTES.SKILLS}>Пользовательское соглашение</Link>
						</li>
					</ul>
				</nav>
				<p className={cls.copyright}>SkillSwap — 2025</p>
			</div>
		</footer>
	);
};
