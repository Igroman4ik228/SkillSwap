// import { useParams } from 'react-router-dom';
import { SkillDetailCard } from '@/entities/skill/ui/skillDetailCard';
import styles from './skill-page.module.scss';

export const SkillPage = () => {
	// const params = useParams();

	// const { skillId } = params;
	return (
		<div className={styles.skillPageContainer}>
			<div
				style={{ width: '324px', height: '444px', backgroundColor: '#ffffff' }}
			>
				здесь будет компонент карточки с пользователем
			</div>
			<SkillDetailCard />
		</div>
	);
};
