import { forwardRef } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validation";
import Input from "../../../OrderForm/components/Input";
import {
	WrappAnimate,
	BoxWrapp,
	Header,
	ButtonBlock,
	FormPages,
	LinkItem,
	InputsWrapp,
	ErrorMessage,
} from "./StyledDropdownRegister";
import { useDispatch, useSelector } from "react-redux";

import { fetchAuthData } from "../../../../reducers";
import { errorDataAuth } from "../../../../selectors";
import { useNavigate } from "react-router-dom";

const DropdownRegister = ({ active, closeFormPages }, ref) => {
	const dispatch = useDispatch();
	const errorMessage = useSelector(errorDataAuth);
	const navigate = useNavigate();

	const handleClick = (event) => {
		event.stopPropagation();
	};

	const handleSubmit = (values) => {
		dispatch(fetchAuthData(values));

		navigate("/");
	};

	return (
		<WrappAnimate
			id="example-panel"
			duration={500}
			height={active}
			ref={ref}
			onClick={handleClick}
		>
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
						<BoxWrapp>
							<Header>
								<span className="details">Введіть свої дані</span>
							</Header>
							<InputsWrapp>
								<Input
									className="form__elem"
									name="email"
									placeholder="E-mail"
									type="text"
								/>
								<Input
									className="form__elem password"
									name="password"
									placeholder="Password"
									type="password"
								/>
							</InputsWrapp>

							{errorMessage && (
								<ErrorMessage className="error-message">
									{errorMessage.message}
								</ErrorMessage>
							)}

							<ButtonBlock>
								<button type="submit">Log in</button>
							</ButtonBlock>
							<FormPages>
								Ще не зареєстровані?
								<LinkItem
									to="/api/registration"
									onClick={() => closeFormPages()}
								>
									Sing Up
								</LinkItem>
							</FormPages>
						</BoxWrapp>
					</Form>
				)}
			</Formik>
		</WrappAnimate>
	);
};

export default forwardRef(DropdownRegister);
