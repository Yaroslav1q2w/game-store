import styled from "styled-components";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { BsFillStarFill } from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";

export const Wrapper = styled.div`
	max-width: 1100px;
	width: 100%;
	margin: 0 auto;
	font-family: "Alegreya Sans SC", sans-serif;
`;

export const ContentInner = styled.div`
	padding: 40px 20px;
`;

export const Header = styled.div`
	font-size: 24px;
	letter-spacing: 0.5px;
	font-weight: 500;

	span {
		font-family: "Josefin Sans", sans-serif;
		color: rgb(255, 215, 0);
		font-size: 28px;
	}

	@media screen and (max-width: 600px) {
		font-size: 20px;

		span {
			font-size: 24px;
		}
	}
`;

export const MainButtons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-top: 100px;
	flex-wrap: wrap;

	@media screen and (max-width: 600px) {
		padding-top: 40px;
	}
`;

export const ButtonItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 30px;
	border: 1px solid rgb(255, 215, 0);
	border-radius: 6px;
	margin: 20px;
	font-size: 20px;
	cursor: pointer;
	color: #fff;
	letter-spacing: 0.5px;
	transition: 0.5s;

	:hover {
		color: rgb(255, 215, 0);
	}

	@media screen and (max-width: 340px) {
		padding: 20px;
	}
`;

export const IconOrders = styled(PiShoppingBagOpenFill)`
	font-size: 40px;
	transition: 0.6s;
	color: #ccc;

	${ButtonItem}:hover & {
		color: rgb(255, 215, 0);
	}

	@media screen and (max-width: 340px) {
		font-size: 30px;
	}
`;

export const IconFavourite = styled(BsFillStarFill)`
	color: #ccc;
	transition: 0.6s;
	font-size: 40px;

	${ButtonItem}:hover & {
		color: rgb(255, 215, 0);
	}

	@media screen and (max-width: 340px) {
		font-size: 30px;
	}
`;

export const IconExit = styled(MdExitToApp)`
	font-size: 40px;
	color: #ccc;
	transition: 0.6s;

	${ButtonItem}:hover & {
		color: rgb(255, 215, 0);
	}

	@media screen and (max-width: 340px) {
		font-size: 30px;
	}
`;
