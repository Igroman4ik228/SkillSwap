import { ExternalButton } from '@/shared';
import AppleIcon from '@/shared/assets/icons/apple.svg?react';
import GoogleIcon from '@/shared/assets/icons/google.svg?react';
import cls from './loginExternal.module.scss';

export const LoginExternal = () => {
	const onClickGoogle = () => {
		// TODO: implement auth with google
	};
	const onClickApple = () => {
		// TODO: implement auth with apple
	};

	return (
		<div className={cls.loginExternal}>
			<ExternalButton
				onClick={onClickGoogle}
				icon={<GoogleIcon />}
				text='Продолжить с Google'
			/>
			<ExternalButton
				onClick={onClickApple}
				icon={<AppleIcon />}
				text='Продолжить с Apple'
			/>
		</div>
	);
};
