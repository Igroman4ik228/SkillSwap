import type { TUsers } from '@/entities';
import { Preloader } from '@/shared';
import { UserCards } from '@/widgets';
import { useCallback, useEffect, useRef, useState } from 'react';

interface InfiniteScrollingProps {
	fetchCards: (page: number, pageSize: number) => Promise<TUsers[]>;
	pageSize?: number;
}

export const InfiniteScrolling = ({
	fetchCards,
	pageSize = 20,
}: InfiniteScrollingProps) => {
	const [cards, setCards] = useState<TUsers[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const pageRef = useRef(1);
	const isLoadingRef = useRef(false);
	const hasMoreRef = useRef(true);
	const loader = useRef<HTMLDivElement>(null);

	const loadMore = useCallback(async () => {
		if (isLoadingRef.current || !hasMoreRef.current) return;

		isLoadingRef.current = true;
		setIsLoading(true);
		setError(null);

		try {
			const currentPage = pageRef.current;
			const newCards = await fetchCards(currentPage, pageSize);
			setCards((prev) => [...prev, ...newCards]);

			const more = newCards.length >= pageSize;
			hasMoreRef.current = more;
			setHasMore(more);

			if (more) pageRef.current += 1;
		} catch {
			setError('Ошибка загрузки данных. Попробуйте позже.');
		} finally {
			isLoadingRef.current = false;
			setIsLoading(false);
		}
	}, [fetchCards, pageSize]);

	useEffect(() => {
		loadMore();
	}, [loadMore]);

	useEffect(() => {
		if (!loader.current || !hasMore) return undefined;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isLoading) {
					loadMore();
				}
			},
			{ threshold: 0.1 }
		);
		observer.observe(loader.current);
		return () => observer.disconnect();
	}, [loadMore, hasMore, isLoading]);

	return (
		<div className='infinite-scroll-wrapper'>
			<UserCards users={cards} />
			{error && <div className='error-message'>{error}</div>}
			<div ref={loader} className='loader-trigger'>
				{isLoading && (
					<div className='loading-spinner'>
						<Preloader />
					</div>
				)}
				{!hasMore && !isLoading && (
					<div className='end-message'>Вы достигли конца списка</div>
				)}
			</div>
		</div>
	);
};
