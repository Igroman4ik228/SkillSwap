import { useEffect, useRef, useState } from 'react';

export const useClickOutsideToggle = <T extends HTMLElement = HTMLDivElement>(
	disabled = false,
	initialVisible = false
) => {
	const [isVisible, setIsVisible] = useState(initialVisible);
	const ref = useRef<T>(null);

	useEffect(() => {
		if (disabled) return undefined;

		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, [disabled]);

	const toggleVisibility = () => setIsVisible((prev) => !prev);

	return {
		isVisible,
		toggleVisibility,
		ref,
	};
};
