import type { ReactNode } from 'react';

export type WelcomeProps = {
	image: ReactNode;
	title: string;
	text: string;
	className?: string;
};
