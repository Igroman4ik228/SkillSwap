import type { TUserCard } from '@/widgets/userCard/model/types';

export type SuggestionsBlockProps = {
	suggestedUsers: TUserCard[];
	currentUser: TUserCard;
};
