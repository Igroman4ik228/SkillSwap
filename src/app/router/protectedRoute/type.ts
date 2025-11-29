import type { To } from 'react-router-dom';

export type ProtectedRouteProps = {
	isPrivate?: boolean;
	guestRedirectTo?: To;
	authRedirectTo?: To;
};
