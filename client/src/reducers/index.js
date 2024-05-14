import favoriteReducer, {
	increaseFavorite,
	decreaseFavorite,
} from "./favourite.reducer";
import todoReducer, {
	actionFetchCards,
	actionFetchAllProducts,
	actionCreateProduct,
} from "./todo.reducer";
import basketReducer, {
	increaseBasket,
	decreaseBasket,
	clearItems,
	addCount,
	removeBasket,
} from "./basket.reducer";
import modalReducer, {
	modalOpen,
	modalClose,
	formClose,
	formOpen,
} from "./modal.reducer";
import filterReducer, { chengeCategory, setPageCount } from "./filter.reducer";

import authReducer, { fetchAuthData, clearDataAuth } from "./auth.reducer";
import registrationReducer, {
	registerFetchData,
	clearDataRegister,
	actionFetchAllCustomers,
} from "./registration.reducer";
import userReducer, { updateUserInfo, fetchUserInfo } from "./user.reducer";
import ordersReducer, { createOrder, fetchAllOrders } from "./orders.reducer";

export {
	favoriteReducer,
	increaseFavorite,
	decreaseFavorite,
	todoReducer,
	actionFetchCards,
	actionFetchAllProducts,
	actionCreateProduct,
	basketReducer,
	increaseBasket,
	decreaseBasket,
	clearItems,
	addCount,
	removeBasket,
	modalReducer,
	modalOpen,
	modalClose,
	formClose,
	formOpen,
	filterReducer,
	chengeCategory,
	setPageCount,
	authReducer,
	fetchAuthData,
	clearDataAuth,
	registrationReducer,
	registerFetchData,
	clearDataRegister,
	actionFetchAllCustomers,
	userReducer,
	updateUserInfo,
	fetchUserInfo,
	ordersReducer,
	createOrder,
	fetchAllOrders,
};
