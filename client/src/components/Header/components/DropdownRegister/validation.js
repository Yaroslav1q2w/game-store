import * as yup from "yup";

export const validationSchema = yup.object({
	email: yup
		.string("Введіть вашу електронну адресу")
		.email("Введіть коректну електронну адресу")
		.required("Електронна адреса обов'язкова до заповнення"),
	password: yup
		.string("Введіть ваш пароль")
		.min(7, "Пароль повинен містити принаймні 7 символів")
		.required("Пароль обов'язковий до заповнення"),
});
