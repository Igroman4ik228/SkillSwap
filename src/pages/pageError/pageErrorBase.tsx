import { Button } from '@/shared';
import cls from './pageError.module.scss';
import error404 from '../../shared/assets/icons/error-404.svg';
import error500 from '../../shared/assets/icons/error-500.svg';

interface ErrorContent {
	title: string;
	message: string;
	image: string;
}

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

export const PageErrorBase = ({
	statusCode = 500,
}: {
	statusCode?: number;
}) => {
	const content = errorContent[statusCode] || errorContent[500];

	return (
		<div className={cls.pageWrapper}>
			<img
				className={cls.imgError}
				src={content.image}
				alt='иконка статуса ошибки'
			/>
			<h2 className={cls.errorTitle}>{content.title}</h2>
			<p className={cls.errorText}>{content.message}</p>
			<div className={cls.btnWrapper}>
				<Button appearance='secondary' style={{ whiteSpace: 'nowrap' }}>
					Сообщить об ошибке
				</Button>
				<Button style={{ paddingLeft: '63.5px', paddingRight: '63.5px' }}>
					На главную
				</Button>
			</div>
		</div>
	);
};
