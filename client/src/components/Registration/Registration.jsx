import {
	Wrapper,
	BoxWrappRegister,
	Header,
	FormItem,
	ContentForm,
	Title,
} from "./StyledRegistration";

import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const Registration = () => {
	const [activeTab, setActiveTab] = useState("register");

	const handleToggleAuth = () => {
		setActiveTab("login");
	};
	const handleToggleRegister = () => {
		setActiveTab("register");
	};

	return (
		<Wrapper>
			<BoxWrappRegister>
				<Header>
					<Title
						className={activeTab === "login" ? "active" : ""}
						onClick={handleToggleAuth}
					>
						Login
					</Title>
					<Title
						className={activeTab === "register" ? "active" : ""}
						onClick={handleToggleRegister}
					>
						Registration
					</Title>
				</Header>

				<ContentForm>
					<FormItem>
						{activeTab === "register" && <Register />}
						{activeTab === "login" && <Login />}
					</FormItem>
				</ContentForm>
			</BoxWrappRegister>
		</Wrapper>
	);
};

export default Registration;
