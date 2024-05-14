import * as yup from "yup";

export const validationRegisterSchema = yup.object({
	login: yup
		.string()
		.required("Введіть свій логін")
		.min(2, "Логін занадто короткий"),
	firstName: yup
		.string()
		.required("Введіть своє ім'я")
		.min(2, "Ім'я занадто коротке"),
	lastName: yup
		.string()
		.required("Введіть своє прізвище")
		.min(2, "Прізвище занадто коротке"),
	email: yup
		.string()
		.required("Електронна пошта обов'язкова")
		.email("Введіть дійсну електронну пошту"),
	password: yup
		.string()
		.required("Пароль обов'язковий")
		.min(7, "Пароль повинен містити щонайменше 7 символів"),
	confirmPassword: yup
		.string()
		.required("Пароль обов'язковий")
		.oneOf([yup.ref("password")], "Паролі не співпадають"),
});
