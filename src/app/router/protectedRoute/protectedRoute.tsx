import { Preloader, ROUTES } from '@/shared';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import type { ProtectedRouteProps } from './type';

export const ProtectedRoute = ({ authRequired }: ProtectedRouteProps) => {
	const location = useLocation();

	// TODO: Получение данных
	const isAuthChecked = true;
	const user = { name: '' };

	// Пока идёт чекаут пользователя, показываем прелоадер
	if (!isAuthChecked) return <Preloader />;

	// Если маршрут для авторизованного пользователя, но пользователь неавторизован, то делаем редирект
	if (authRequired && !user)
		return <Navigate replace to={ROUTES.LOGIN} state={{ from: location }} />; // в поле from объекта location.state записываем информацию о URL

	// Если маршрут для неавторизованного пользователя, но пользователь авторизован
	if (!authRequired && user)
		// при обратном редиректе получаем данные о месте назначения редиректа из объекта location.state
		// в случае если объекта location.state?.from нет — а такое может быть, если мы зашли на страницу логина по прямому URL
		// мы сами создаём объект c указанием адреса и делаем переадресацию на главную страницу
		return (
			<Navigate
				replace
				to={location.state?.from || { pathname: ROUTES.SKILLS }}
			/>
		);

	return <Outlet />;
};
