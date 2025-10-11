import type { TUsers } from '@/entities';

export type SuggestionsBlockProps = {
	suggestedUsers: TUsers[];
	currentUser: TUsers;
};
