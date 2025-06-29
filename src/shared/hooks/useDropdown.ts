import { useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => setIsOpen((prev) => !prev);
	const closeDropdown = () => setIsOpen(false);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				closeDropdown();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return {
		isOpen,
		toggleDropdown,
		dropdownRef,
	};
};
