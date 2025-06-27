import clsx from 'clsx';
import cls from './formWrapper.module.scss';
import type { FormWrapperProps } from './type';

export const FormWrapper = ({ children, className }: FormWrapperProps) => {
	return <div className={clsx(cls.wrapper, className)}>{children}</div>;
};
