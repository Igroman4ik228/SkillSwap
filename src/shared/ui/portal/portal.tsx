import { createPortal } from 'react-dom';
import type { PortalProps } from './type';

export const Portal = ({
	children,
	container = document.body,
	key,
}: PortalProps) => createPortal(children, container, key);
