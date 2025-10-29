import { yup } from '@/shared';
import type { InferType } from 'yup';

export const profileFormSchema = yup.object({
	email: yup.string().email().required(),

	name: yup.string().required(),
	bornDate: yup.string().required(),
	gender: yup.string().oneOf(['Мужской', 'Женский']).required(),
	city: yup.string().required(),

	description: yup.string().required(),

	avatar: yup.string().required(),
});

export type ProfileFormData = InferType<typeof profileFormSchema>;
