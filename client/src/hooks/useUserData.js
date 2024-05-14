import { jwtDecode } from "jwt-decode";

export const useUserData = () => {
	const storedAuthData = localStorage.getItem("authData");
	const storedRegisterData = localStorage.getItem("registerData");

	let user = null;

	if (storedAuthData) {
		const authData = JSON.parse(storedAuthData);

		user = jwtDecode(authData.token);
	} else if (storedRegisterData) {
		const registerData = JSON.parse(storedRegisterData);

		user = jwtDecode(registerData.token);
	}

	return user;
};
