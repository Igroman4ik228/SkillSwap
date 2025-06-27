import cls from './allSkills.module.scss';
import { SkillSection } from './skillSection';
import { SKILL_SECTIONS } from '../model/data';

export const AllSkills = () => (
	<div className={cls.allSkills}>
		{SKILL_SECTIONS.map((section) => (
			<SkillSection key={section.title} {...section} />
		))}
	</div>
);
