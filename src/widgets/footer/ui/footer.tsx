import { Logo, ROUTES } from '@/shared';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import type { FooterProps } from './type';

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={clsx(styles.footer, className)}>
			<div className={styles.container}>
				<Link to={ROUTES.SKILLS} className={styles.logo}>
					<Logo text='SkillSwap' />
				</Link>
				<nav className={styles.nav}>
					<ul className={styles.column}>
						<li>
							<Link to={ROUTES.SKILLS}>О проекте</Link>
						</li>
						<li>
							<Link to={ROUTES.SKILLS}>Все навыки</Link>
						</li>
					</ul>
					<ul className={styles.column}>
						<li>
							<Link to={ROUTES.SKILLS}>Контакты</Link>
						</li>
						<li>
							<Link to={ROUTES.SKILLS}>Блог</Link>
						</li>
					</ul>
					<ul className={styles.column}>
						<li>
							<Link to={ROUTES.SKILLS}>Политика конфиденциальности</Link>
						</li>
						<li>
							<Link to={ROUTES.SKILLS}>Пользовательское соглашение</Link>
						</li>
					</ul>
				</nav>
				<p className={styles.copyright}>SkillSwap — 2025</p>
			</div>
		</footer>
	);
};
