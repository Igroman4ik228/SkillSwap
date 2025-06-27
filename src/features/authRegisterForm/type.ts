export interface FormValues {
	email: string;
	password: string;
}

export type AuthRegisterFormProps = {
	onSubmitHandler: (data: FormValues) => void;
};
