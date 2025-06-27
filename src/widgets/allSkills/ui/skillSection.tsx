import { Icon } from '@/shared/ui/icon';
import { Link } from 'react-router-dom';
import cls from './skillSection.module.scss';
import type { THeaderTitle, TSkillSectionData } from '../model/data';

const clsColorMap: Record<THeaderTitle, string> = {
	'Бизнес и карьера': cls.business,
	'Творчество и искусство': cls.art,
	'Иностранные языки': cls.language,
	'Образование и развитие': cls.education,
	'Дом и уют': cls.house,
	'Здоровье и лайфстайл': cls.health,
};

export const SkillSection = ({
	title,
	icon,
	items,
	className,
}: TSkillSectionData & { className?: string }) => (
	<section className={`${cls.section} ${className ?? ''}`}>
		<div className={cls.wrapper}>
			<div className={`${cls.iconWrapper} ${clsColorMap[title]}`}>
				<Icon Svg={icon} width={24} height={24} />
			</div>

			<div className={cls.content}>
				<h2 className={cls.title}>{title}</h2>

				<ul className={cls.list}>
					{items.map((item) => (
						<li key={item} className={cls.item}>
							<Link to='/'>{item}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
);
