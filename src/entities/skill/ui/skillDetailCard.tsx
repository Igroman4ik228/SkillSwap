import LikeActiveIcon from '@/shared/assets/icons/like-active.svg?react';
import LikeIcon from '@/shared/assets/icons/like.svg?react';
import MoreIcon from '@/shared/assets/icons/more-square.svg?react';
import ShareIcon from '@/shared/assets/icons/share.svg?react';

import { Icon } from '@/shared/ui/icon';

import { Button } from '@/shared';

import drumsMain from '@/shared/assets/images/drums_main.jpg';

import drums1 from '@/shared/assets/images/drums_1.jpg';
import drums2 from '@/shared/assets/images/drums_2.jpg';
import drumsOverlay from '@/shared/assets/images/drums_overlay.jpg';
import { useState } from 'react';
import cls from './skillDetailCard.module.scss';

export const SkillDetailCard = () => {
	const [isLiked, setIsLiked] = useState(false);
	// Заглушка из макета
	const mockSkill = {
		title: 'Игра на барабанах',
		category: 'Творчество и искусство / Музыка и звук',
		description: `Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений 
    на сцене с живыми группами. Научу основам техники (как не отбить себе пальцы), играть любимые ритмы 
    и разбирать песни, импровизировать и звучать уверенно даже без партитуры.`,
	};

	const mockImages = [
		{ id: 'main', src: drumsMain },
		{ id: '1', src: drums1 },
		{ id: '2', src: drums2 },
		{ id: 'overlay', src: drumsOverlay },
	];

	const mainImage = mockImages.find((image) => image.id === 'main')?.src;

	const handleLike = () => {
		setIsLiked((prev) => !prev);
	};

	return (
		<div className={cls.card}>
			<div className={cls.header}>
				<Icon Svg={isLiked ? LikeActiveIcon : LikeIcon} onClick={handleLike} />
				<Icon Svg={ShareIcon} onClick={() => console.log('Share clicked')} />
				<Icon Svg={MoreIcon} onClick={() => console.log('More clicked')} />
			</div>
			<div className={cls.content}>
				<div className={cls.contentInfo}>
					<h1 className={cls.title}>{mockSkill.title}</h1>
					<span className={cls.category}>{mockSkill.category}</span>
					<p className={cls.description}>{mockSkill.description}</p>
					<Button className={cls.button}>Предложить обмен</Button>
				</div>
				<div className={cls.contentGalery}>
					<div>
						<img
							src={mainImage}
							alt='Основное изображение'
							className={cls.mainImage}
						/>
					</div>
					<div className={cls.sideImages}>
						{mockImages.slice(1, 4).map(({ id, src }) => (
							<img
								key={id}
								src={src}
								alt={`Превью ${id + 1}`}
								className={cls.sideImage}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
