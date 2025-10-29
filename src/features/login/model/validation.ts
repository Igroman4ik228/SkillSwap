import { yup } from '@/shared';
import type { InferType } from 'yup';

export const loginFormSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

export type LoginFormData = InferType<typeof loginFormSchema>;
