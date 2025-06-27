import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { PageErrorBase } from './pageErrorBase';

interface PageErrorProps {
	statusCode?: number;
	useRouterError?: boolean;
}

export const PageError = ({
	statusCode,
	useRouterError = true,
}: PageErrorProps) => {
	const routeError = useRouteError();
	let code = statusCode;

	if (!code && useRouterError && routeError) {
		code = isRouteErrorResponse(routeError) ? routeError.status : 500;
	}

	return <PageErrorBase statusCode={code} />;
};
