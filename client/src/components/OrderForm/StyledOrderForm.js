import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ContainerOrder = styled.div`
	display: flex;
	justify-content: center;
	padding: 30px 0;
`;

export const ContentInner = styled.div`
	max-width: 1180px;
	width: 100%;
	padding: 20px;
`;

export const TitleOrder = styled.h2`
	color: rgb(255, 215, 0);
	letter-spacing: 0.5px;
	font-size: 30px;
	letter-spacing: 1.5px;
	font-weight: 500;
	font-family: "Alegreya Sans SC", sans-serif;
	text-align: center;
`;

export const FormWrapperOrder = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 50px 20px 20px;
	/* border: 3px double #ccc; */
	max-width: 400px;
	width: 100%;
`;

export const StyledLabelOrder = styled.label`
	display: flex;
	flex-direction: column;

	.label__text {
		font-family: "Alegreya Sans SC", sans-serif;
		letter-spacing: 1px;
		font-size: 18px;
		padding-top: 10px;
		color: rgb(152, 185, 0);
		font-weight: 500;
	}

	.input__elem-order {
		border: none;
		border-bottom: 1px solid #ccc;
		background: none;
		font-family: "Alegreya Sans SC", sans-serif;
		outline: none;
		margin-top: 10px;
		transition: 0.4s;
		font-size: 16px;
		color: #fff;
		padding: 10px;
		border-radius: 0;
		width: 100%;
		box-sizing: border-box;

		:hover {
			border-bottom: 1px solid #9e9d9d;
		}

		:focus {
			border-bottom: 1px solid #9dfac1;
		}

		::placeholder {
			color: #717979;
			font-size: 15px;
			letter-spacing: 1.4px;
		}
	}
`;

export const StyledButtonSubmit = styled.button`
	border: 1px solid #000;
	font-family: "Alegreya Sans SC", sans-serif;
	font-size: 18px;
	padding: 14px 50px;
	background-color: green;
	text-transform: uppercase;
	width: 100%;
	color: #fff;
	cursor: pointer;
	letter-spacing: 2px;
	transition: 0.5s;
	margin-top: 30px;

	:hover {
		background-color: #37932a;
	}
`;

export const WrappContent = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: start;
`;

export const TitleCards = styled.h2`
	color: #001d37;
	font-family: "Alegreya Sans SC", sans-serif;
	text-align: center;
	padding: 0 0 14px;
	font-size: 26px;
`;

export const CardsOrder = styled.div`
	margin-top: 80px;
	padding: 20px;
	background-color: #fff;
	border: 4px double #ccc;

	@media screen and (max-width: 500px) {
		padding: 20px 0 30px;
	}
`;

export const CardWrappOrder = styled.div`
	display: flex;
	position: relative;
	padding-bottom: 16px;
	margin-bottom: 16px;
	border: 2px double #c4c4c4;
	color: #000;
	padding: 10px;
	background-color: #e2e2e2;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	letter-spacing: 0.7px;
`;

export const ImageWrappOrder = styled.div`
	height: 80px;

	img {
		height: 100%;
		width: 140px;
	}

	@media screen and (max-width: 500px) {
		height: 60px;

		img {
			height: 100%;
			width: 100px;
		}
	}
`;

export const DescriptionOrder = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 30px;
	position: relative;

	@media screen and (max-width: 500px) {
		padding-left: 10px;
		justify-content: space-around;
	}
`;

export const NameItemOrder = styled.h3`
	font-size: 14px;
	text-transform: uppercase;

	@media screen and (max-width: 500px) {
		font-size: 12px;
	}
`;

export const CountItem = styled.span`
	font-family: "Alegreya Sans SC", sans-serif;
	font-size: 16px;
	padding-top: 6px;
`;

export const PriceOrder = styled.p`
	display: inline-block;
	padding-top: 6px;
	font-size: 15px;
	font-weight: 550;

	@media screen and (max-width: 500px) {
		font-size: 12px;
	}
`;

export const FooterContentOrder = styled.div`
	display: flex;
	margin-bottom: 10px;
	justify-content: space-between;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	padding: 0 16px;
	font-family: "Alegreya Sans SC", sans-serif;
	letter-spacing: 1px;

	@media screen and (max-width: 500px) {
		top: 20px;
		padding: 0 6px;
	}
`;

export const TotalPriceOrder = styled.div`
	font-size: 22px;
	font-weight: 600;
	text-align: center;
	color: #000;

	span {
		font-size: 18px;
		text-transform: lowercase;
	}

	@media screen and (max-width: 500px) {
		font-size: 18px;
	}
`;

export const ButtonShoppingBagOrder = styled(Link)`
	font-size: 16px;
	font-style: normal;
	padding: 14px 30px;
	color: #fafafa;
	background: #160e05;
	border: none;
	outline: none;
	cursor: pointer;
	transition: 0.5s;

	text-decoration: none;
	text-transform: uppercase;

	&:hover {
		background: #434342;
	}

	@media screen and (max-width: 500px) {
		padding: 10px 20px;
		font-size: 14px;
	}
`;
