import cls from './preloader.module.scss';

export const Preloader = () => (
	<div className={cls.preloader}>
		<div className={cls.preloader_circle} />
	</div>
);
