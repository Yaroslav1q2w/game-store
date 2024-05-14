import * as yup from "yup";

export const validationSchema = yup.object({
	login: yup.string().required("Логін є обов'язковим!"),
	email: yup
		.string()
		.email("Введіть коректний email")
		.required("Email є обов'язковим!"),
	firstName: yup.string().required("Ім'я є обов'язковим!"),
	lastName: yup.string().required("Прізвище є обов'язковим!"),
	age: yup
		.number()
		.positive("Введіть коректний вік")
		.integer("Введіть ціле число")
		.required("Вік є обов'язковим!"),
	region: yup.string().required("Адреса доставки є обов'язковою!"),
	phone: yup.string().required("Телефон є обов'язковим!"),
});
