import { configureStore } from "@reduxjs/toolkit";

import {
	favoriteReducer,
	todoReducer,
	basketReducer,
	modalReducer,
	filterReducer,
	authReducer,
	registrationReducer,
	userReducer,
	ordersReducer,
} from "../reducers";

const store = configureStore({
	reducer: {
		favorite: favoriteReducer,
		todos: todoReducer,
		basket: basketReducer,
		modal: modalReducer,
		filter: filterReducer,
		auth: authReducer,
		register: registrationReducer,
		user: userReducer,
		orders: ordersReducer,
	},
});

export default store;
