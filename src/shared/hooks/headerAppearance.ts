import { useLocation } from 'react-router-dom';
import { ROUTES } from '../const';

const pureHeaderPaths: string[] = [ROUTES.LOGIN, ROUTES.REGISTER];

export function useHeaderAppearance(): 'pure' | 'primary' {
	const location = useLocation();

	return pureHeaderPaths.includes(location.pathname) ? 'pure' : 'primary';
}
