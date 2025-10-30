import { Backing, Welcome } from '@/shared';
import LightBulbIcon from '@/shared/assets/icons/light-bulb.svg?react';
import { Login } from '@/widgets/login';
import cls from './loginPage.module.scss';

export const LoginPage = () => {
	return (
		<div className={cls.loginPage}>
			<Backing className={cls.wrapperLogin}>
				<Login />
			</Backing>

			<Backing className={cls.wrapperWelcome}>
				<Welcome
					image={<LightBulbIcon />}
					title='С возвращением в SkillSwap!'
					text='Обменивайтесь знаниями и навыками с другими людьми'
				/>
			</Backing>
		</div>
	);
};
