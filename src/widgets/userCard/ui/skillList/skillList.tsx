import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SkillTag } from '../skillTag';
import styles from './skillList.module.scss';
import type { SkillListProps } from './type';

const SkillItem = ({
	text,
	root,
	onHide,
}: {
	text: string;
	root: Element | null;
	onHide: (text: string) => void;
}) => {
	const [ref] = useInView({
		root,
		threshold: 1,
		triggerOnce: true,
		onChange: (inView) => {
			if (!inView) onHide(text);
		},
	});

	return (
		<li ref={ref} data-item={text}>
			<SkillTag text={text} appearance='art' />
		</li>
	);
};

const SkillCounter = ({
	count,
	root,
	onHide,
}: {
	count: number;
	root: Element | null;
	onHide: () => void;
}) => {
	const [ref] = useInView({
		root,
		threshold: 1,
		triggerOnce: true,
		onChange: (inView) => {
			if (!inView) onHide();
		},
	});

	return (
		<li ref={ref}>
			<SkillTag text={`+${count}`} appearance='counter' />
		</li>
	);
};

export const SkillList = ({ items }: SkillListProps) => {
	const [visibleItems, setVisibleItems] = useState<string[]>(items);
	const listRef = useRef<HTMLUListElement | null>(null);
	const [root, setRoot] = useState<Element | null>(null);

	useEffect(() => {
		setRoot(listRef.current);
	}, []);

	const handleItemHide = (text: string) => {
		setVisibleItems((prev) => prev.filter((t) => t !== text));
	};

	const handleCounterHide = () => {
		setVisibleItems((prev) => prev.slice(0, -1));
	};

	const hiddenCount = items.length - visibleItems.length;

	return (
		<ul className={styles.skillList} ref={listRef}>
			{visibleItems.map((text) => (
				<SkillItem key={text} text={text} root={root} onHide={handleItemHide} />
			))}
			{hiddenCount > 0 && (
				<SkillCounter
					key='counter'
					count={hiddenCount}
					root={root}
					onHide={handleCounterHide}
				/>
			)}
		</ul>
	);
};
