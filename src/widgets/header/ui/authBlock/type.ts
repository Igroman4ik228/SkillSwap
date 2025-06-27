import type { TUser } from '@/entities';

export type AuthBlockProps = {
	user: Pick<TUser, 'name' | 'avatar'> | null;
};
