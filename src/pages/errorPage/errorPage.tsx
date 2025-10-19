import { Button, RouterLinkButton, ROUTES } from '@/shared';
import error404 from '../../shared/assets/icons/error-404.svg';
import error500 from '../../shared/assets/icons/error-500.svg';
import cls from './errorPage.module.scss';

type ErrorContent = {
	title: string;
	message: string;
	image: string;
};

const errorContent: Record<number, ErrorContent> = {
	404: {
		title: 'Страница не найдена',
		message:
			'К сожалению, эта страница недоступна. Вернитесь на главную страницу или попробуйте позже.',
		image: error404,
	},
	500: {
		title: 'На сервере произошла ошибка',
		message: 'На сервере произошла ошибка. Попробуйте позже.',
		image: error500,
	},
};

export const ErrorPage = ({ statusCode = 404 }: { statusCode?: number }) => {
	const content = errorContent[statusCode] || errorContent[404];

	return (
		<div className={cls.wrapper}>
			<div className={cls.errorPage}>
				<img src={content.image} alt='Картинка статуса ошибки' />
				<div className={cls.content}>
					<div className={cls.wrapperText}>
						<h1 className={cls.title}>{content.title}</h1>
						<p className={cls.text}>{content.message}</p>
					</div>
					<div className={cls.wrapperBtn}>
						<Button className={cls.btn} appearance='secondary'>
							Сообщить об ошибке
						</Button>
						<RouterLinkButton className={cls.btn} to={ROUTES.SKILLS}>
							На главную
						</RouterLinkButton>
					</div>
				</div>
			</div>
		</div>
	);
};
