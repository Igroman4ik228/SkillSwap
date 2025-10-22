import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared';

export const PURE_HEADER_PATHS: string[] = [ROUTES.LOGIN, ROUTES.REGISTER];

export const useHeaderAppearance = (): 'pure' | 'primary' => {
	const location = useLocation();

	return PURE_HEADER_PATHS.includes(location.pathname) ? 'pure' : 'primary';
};
