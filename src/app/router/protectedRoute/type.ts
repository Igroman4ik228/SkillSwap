import type { To } from 'react-router-dom';

export type ProtectedRouteProps = {
	authRequired?: boolean;
	unauthorizedRedirectTo?: To;
	authorizedRedirectTo?: To;
};
