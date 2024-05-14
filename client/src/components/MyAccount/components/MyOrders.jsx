import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../selectors";
import { useUserData } from "../../../hooks/useUserData";
import { fetchUserInfo } from "../../../reducers";
import {
	Wrapper,
	Title,
	OrderContainer,
	OrderHeader,
	OrderDetails,
	ProductImage,
	ProductDetails,
	ProductTitle,
	ProductQuantity,
	OrderInfo,
	TotalPrice,
	OrderDesc,
	ContentInner,
} from "./StyledMyOrders";
import { Link } from "react-router-dom";

export const MyOrders = () => {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const userId = useUserData();

	useEffect(() => {
		dispatch(fetchUserInfo(userId._id));
	}, []);

	const calculateTotalPrice = (products) => {
		return products.reduce(
			(total, product) => total + product.price * product.quantity,
			0
		);
	};

	return (
		<Wrapper>
			<ContentInner>
				<Title>Мої замовлення</Title>
				{user?.orders.map((order) => (
					<OrderContainer key={order._id}>
						<OrderHeader>
							<span>
								Замовлення {new Date(order.orderDate).toLocaleString()}
							</span>
							<TotalPrice>
								Загальна сума: {calculateTotalPrice(order.products)} грн.
							</TotalPrice>
						</OrderHeader>
						{order.products.map((product) => (
							<Link
								key={product.productId}
								to={`/api/products/${product.productId}`}
							>
								<OrderDetails>
									<OrderDesc>
										<ProductImage src={product.image} alt={product.title} />
										<ProductDetails>
											<ProductTitle>{product.title}</ProductTitle>
											<ProductQuantity>
												Кількість: {product.quantity}
											</ProductQuantity>
										</ProductDetails>
									</OrderDesc>
									<OrderInfo>{product.description}</OrderInfo>
								</OrderDetails>
							</Link>
						))}
					</OrderContainer>
				))}
			</ContentInner>
		</Wrapper>
	);
};
