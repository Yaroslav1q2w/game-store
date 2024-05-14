import { useDispatch, useSelector } from "react-redux";
import {
	Container,
	Title,
	OrderTable,
	Th,
	Td,
	UserColumn,
	Address,
} from "./StyledOrders";
import { fetchAllOrders } from "../../../../reducers";
import { useEffect } from "react";
import { orderSelector } from "../../../../selectors";

const EditOrders = () => {
	const dispatch = useDispatch();
	const orders = useSelector(orderSelector);

	useEffect(() => {
		dispatch(fetchAllOrders());
	}, [dispatch]);

	return (
		<Container>
			<Title>Замовлення</Title>
			<OrderTable>
				<thead>
					<tr>
						<Th>Дата замовлення</Th>
						<Th>Користувач</Th>
						<Th>Товари</Th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((order) => (
						<tr key={order._id}>
							<Td>{new Date(order.orderDate).toLocaleString()}</Td>
							<UserColumn>
								<div>
									{order.user.firstName} {order.user.lastName}
								</div>
								<div>Email: {order.user.email}</div>
								<div>Phone: {order.user.phone}</div>
								<div>Адреса: {order.user.region}</div>
							</UserColumn>
							<Td>
								<ul>
									{order.products.map((product) => (
										<li key={product.productId}>
											{product.title} - Quantity: {product.quantity}
										</li>
									))}
								</ul>
							</Td>
						</tr>
					))}
				</tbody>
			</OrderTable>
		</Container>
	);
};

export default EditOrders;
