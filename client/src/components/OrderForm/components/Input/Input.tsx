import { Field, ErrorMessage } from "formik";

import "./Input.scss";

interface InputProps {
	type: string;
	placeholder: string;
	name: string;
	className: string;
}

const Input = ({ type, placeholder, name, className }: InputProps) => {
	return (
		<div className="form-item has-validation">
			<Field
				type={type}
				className={className}
				name={name}
				placeholder={placeholder}
			/>
			<ErrorMessage className="error-message" name={name} component="p" />
		</div>
	);
};

export default Input;
