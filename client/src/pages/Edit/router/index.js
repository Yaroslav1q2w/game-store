import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import EditProducts from "../components/EditProducts";
import EditOrders from "../components/EditOrders";
import EditUsers from "../components/EditUsers";

function EditorRoutes() {
	return (
		<>
			<Routes>
				<Route index element={<Dashboard />} />{" "}
				<Route path="/products" element={<EditProducts />} />
				<Route path="/orders" element={<EditOrders />} />
				<Route path="/users" element={<EditUsers />} />
			</Routes>
		</>
	);
}

export default EditorRoutes;
