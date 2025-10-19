import { useLocation } from 'react-router-dom';
import { pureHeaderPaths } from '../const/routes';

export function useHeaderAppearance(): 'pure' | 'primary' {
	const location = useLocation();

	return pureHeaderPaths.includes(location.pathname) ? 'pure' : 'primary';
}
