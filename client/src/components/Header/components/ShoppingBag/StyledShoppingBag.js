import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";

export const Wrappper = styled.div`
	width: 330px;
	background: rgb(249 249 249);
	height: 100%;
	letter-spacing: 1px;
	padding: 20px;

	@media screen and (max-width: 500px) {
		width: 250px;
		padding: 10px;
	}

	@media screen and (max-width: 350px) {
		width: 200px;
	}
`;

export const Header = styled.h1`
	font-size: 30px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 8px;
	font-family: "Alegreya Sans SC", sans-serif;
	position: relative;

	@media screen and (max-width: 500px) {
		font-size: 26px;
	}
`;

export const FavouriteWrapp = styled.div`
	position: absolute;
	right: 0;
	bottom: -6px;
	color: #000;

	span {
		font-size: 20px;
	}
`;
export const FavouriteIcon = styled(AiFillStar)`
	font-size: 30px;
`;

export const Cards = styled.div`
	padding: 30px 0;

	@media screen and (max-width: 500px) {
		padding: 20px 0 30px;
	}
`;

export const CardWrapp = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	padding-bottom: 16px;
	margin-bottom: 16px;
	border-bottom: 1px solid #c4c4c4;
`;

export const ImageWrapp = styled.div`
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

export const Description = styled.div`
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

export const NameItem = styled.h3`
	font-size: 14px;
	text-transform: uppercase;

	@media screen and (max-width: 500px) {
		font-size: 12px;
	}
`;

export const Price = styled.p`
	display: inline-block;
	padding-top: 6px;
	font-size: 15px;
	font-weight: 550;

	@media screen and (max-width: 500px) {
		font-size: 12px;
	}
`;

export const CloseItem = styled(IoCloseSharp)`
	font-size: 26px;
	position: absolute;
	right: 0;
	bottom: 10px;
	cursor: pointer;

	@media screen and (max-width: 500px) {
		font-size: 22px;
	}
`;

export const FooterContent = styled.div`
	position: relative;
	top: 30px;
	margin-bottom: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	font-family: "Alegreya Sans SC", sans-serif;
	letter-spacing: 1px;

	@media screen and (max-width: 500px) {
		top: 20px;
		padding: 0 6px;
	}
`;

export const TotalPrice = styled.div`
	font-size: 22px;
	font-weight: 600;
	text-align: center;

	span {
		font-size: 18px;
		text-transform: lowercase;
	}

	@media screen and (max-width: 500px) {
		font-size: 18px;
	}
`;

export const ButtonShoppingBag = styled(Link)`
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

export const IconText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 80px;
	flex-direction: column;
`;

export const Text = styled.div`
	padding-top: 24px;
	font-family: "Alegreya Sans SC", sans-serif;
	font-size: 23px;
	font-weight: 500;
	text-align: center;
`;
