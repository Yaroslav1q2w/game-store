import { Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import ShoppingCart from "../pages/ShoppingCart";
import Favourite from "../pages/Favourite";
import GamePage from "../pages/GamePage";
import Registration from "../components/Registration";
import MyAccount from "../components/MyAccount";
import Edit from "../pages/Edit";
import OrderForm from "../components/OrderForm";
import { MyOrders } from "../components/MyAccount/components/MyOrders";

const RootRouter = () => {
	return (
		<Routes>
			<Route index element={<Cards />} />
			<Route path="api/basket" element={<ShoppingCart />} />
			<Route path="api/favorite" element={<Favourite />} />
			<Route path="api/edit/*" element={<Edit />} />
			<Route path="api/my-account/*" element={<MyAccount />} />
			<Route path="api/my-account/my-orders" element={<MyOrders />} />
			<Route path="api/registration" element={<Registration />} />
			<Route path="api/order-form" element={<OrderForm />} />
			<Route path="api/products/:card_id" element={<GamePage />} />
		</Routes>
	);
};

export default RootRouter;
