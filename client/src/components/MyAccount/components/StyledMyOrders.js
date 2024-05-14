// StyledMyOrders.js
import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 1100px;
	width: 100%;
	margin: 0 auto;
	font-family: "Alegreya Sans SC", sans-serif;
`;

export const ContentInner = styled.div`
	padding: 10px;
`;

export const Title = styled.h2`
	color: #01e205;
	letter-spacing: 0.5px;
	font-size: 30px;
	letter-spacing: 1.5px;
	text-align: center;
	font-weight: 500;
	font-family: "Alegreya Sans SC", sans-serif;
	padding-bottom: 30px;
`;

export const OrderContainer = styled.div`
	border: 2px ridge #ccc;
	margin-bottom: 20px;
	padding: 10px;
	border-radius: 4px;
	transition: 0.3s ease;
`;

export const OrderHeader = styled.h3`
	font-size: 24px;
	padding: 20px;
	display: flex;
	align-items: center;
	font-weight: 500;
	justify-content: space-between;
	color: rgb(255, 215, 0);
`;

export const OrderDetails = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 4px;
	transition: 0.4s ease;
	padding: 10px;

	:hover {
		background-color: rgba(226, 226, 226, 0.2);
	}
`;

export const OrderDesc = styled.div`
	display: flex;
	gap: 20px;
`;

export const ProductImage = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 4px;
`;

export const ProductDetails = styled.div`
	padding-right: 40px;
`;

export const ProductTitle = styled.h4`
	font-size: 18px;
	margin-bottom: 5px;
`;

export const ProductQuantity = styled.p`
	font-size: 16px;
	white-space: nowrap;
	color: #555;
`;

export const OrderInfo = styled.div`
	text-align: center;
	color: #999;
`;

export const TotalPrice = styled.p`
	font-size: 20px;
	font-weight: bold;
	color: #00b103;
`;
