import * as yup from "yup";

export const validationProductSchema = yup.object({
	image: yup
		.string()
		.url("Введіть дійсне посилання на зображення")
		.required("Вставте посилання на зображення"),
	title: yup.string().required("Введіть назву товару"),
	price: yup
		.number()
		.typeError("Введіть числове значення")
		.required("Введіть ціну"),
	article: yup
		.number()
		.typeError("Введіть числове значення")
		.required("Введіть артикул"),
	developer: yup.string().required("Введіть розробника"),
	description: yup.string().required("Введіть короткий опис"),
	genre: yup.string().required("Введіть жанр"),
	language: yup.string().required("Введіть мови"),
	the_plot: yup.string().required("Введіть повний опис"),
	data: yup.string().required("Введіть дату виходу"),
	platforms: yup.string().required("Введіть платформи"),
	category: yup
		.number()
		.typeError("Введіть числове значення")
		.required("Введіть категорію"),
});
