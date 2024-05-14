import { Formik, Form } from "formik";
import { validationSchema } from "./validation";
import Input from "../../../OrderForm/components/Input";
import {
	Wrapper,
	InputsWrappRegister,
	ErrorMessage,
	ButtonRegister,
	Header,
} from "./StyledLogin";
import { useDispatch, useSelector } from "react-redux";

import { fetchAuthData } from "../../../../reducers";
import { errorDataAuth } from "../../../../selectors";

const Login = () => {
	const dispatch = useDispatch();
	const errorMessage = useSelector(errorDataAuth);

	const handleSubmit = (values) => {
		dispatch(fetchAuthData(values));
	};

	return (
		<Wrapper>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form>
						<Header>
							Будь ласка, введіть дані свого облікового запису, щоб увійти
						</Header>
						<InputsWrappRegister>
							<label>
								<p className="label__text">E-mail</p>
								<Input
									className="form__elem-register"
									name="email"
									placeholder="E-mail"
									type="text"
								/>
							</label>
							<label>
								<p className="label__text">Password</p>
								<Input
									className="form__elem-register"
									name="password"
									placeholder="Пароль"
									type="password"
								/>
							</label>
						</InputsWrappRegister>

						{errorMessage && (
							<ErrorMessage className="error-message">
								{errorMessage.message}
							</ErrorMessage>
						)}

						<ButtonRegister>
							<button type="submit">Log in</button>
						</ButtonRegister>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default Login;
