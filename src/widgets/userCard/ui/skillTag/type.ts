import type { HTMLAttributes } from 'react';

type AppearanceSkillTag =
	| 'art'
	| 'language'
	| 'business'
	| 'education'
	| 'house'
	| 'health'
	| 'counter';

export type SkillTagProps = HTMLAttributes<HTMLDivElement> & {
	text: string;
	appearance: AppearanceSkillTag;
};
