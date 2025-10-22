import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared';

export const EXCLUDE_FOOTER_PATHS: string[] = [ROUTES.LOGIN, ROUTES.REGISTER];

export const useFooter = (): boolean => {
	const location = useLocation();

	return !EXCLUDE_FOOTER_PATHS.includes(location.pathname);
};
