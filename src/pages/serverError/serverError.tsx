import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ServerErrorPage = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>Ошибка {error.status}</h1>
				<p>{error.statusText}</p>
			</div>
		);
	}

	return <h1>Что-то пошло не так</h1>;
};
