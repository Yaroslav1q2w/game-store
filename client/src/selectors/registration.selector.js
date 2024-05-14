export const registrationSelector = (state) => state.register.data;
export const errorDataRegister = (state) => state.register.error;
export const registerAllCustomers = (state) =>
	state.register?.allCustomers.data;
