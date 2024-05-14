import styled from "styled-components";
import {
	IoIosAddCircleOutline,
	IoIosRemoveCircleOutline,
} from "react-icons/io";

import { IoCloseSharp } from "react-icons/io5";

export const Wrapper = styled.div`
	color: white;
	width: 100%;
	position: relative;
	margin-bottom: 20px;
	padding-bottom: 20px;
	justify-self: center;
	display: flex;
	border-bottom: 1px solid #343434;

	img {
		max-width: 320px;
		height: auto;
		height: 100%;
		width: 100%;
	}

	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;

export const ItemDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 34px 0px;
	position: relative;
	width: 100%;

	@media screen and (max-width: 700px) {
		padding: 6px 14px 0px;
	}

	@media screen and (max-width: 500px) {
		padding: 6px 0px 0px;
	}
`;

export const HeaderWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;

	.basket__item-title {
		padding-top: 10px;
		font-size: 24px;
		font-weight: bold;
		margin: 0;
		transition: 0.3s;

		&:hover {
			color: #777777;
			transition: 0.3s;
		}

		@media screen and (max-width: 700px) {
			font-size: 16px;
		}
	}

	.basket__item-article {
		display: inline-block;
		padding-top: 8px;
		font-size: 14px;
		font-weight: 200;
		color: #7a7a7a;
		font-family: "Alegreya Sans SC", sans-serif;
	}
`;

export const PriceItem = styled.p`
	font-size: 20px;

	@media screen and (max-width: 700px) {
		font-size: 16px;
	}

	@media screen and (max-width: 360px) {
		font-size: 12px;
	}
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	position: relative;

	.item__remove {
		cursor: pointer;
	}

	.item-developer {
		background-color: rgb(47, 47, 51);
		font-size: 14px;
		font-weight: 600;
		display: inline-block;
		padding: 5px 20px;
		border-radius: 4px;
		letter-spacing: 1.5px;
		color: #cd853f;
		box-shadow: 0 0 10px #ffd700;
		font-family: "Alegreya Sans SC", sans-serif;

		@media screen and (max-width: 700px) {
			font-size: 11px;
		}
	}
`;

export const CounterWrap = styled.div`
	display: flex;
	align-items: center;

	.count {
		font-size: 16px;

		@media screen and (max-width: 360px) {
			font-size: 12px;
		}
	}
`;

export const IconIncrease = styled(IoIosAddCircleOutline)`
	color: #cd853f;
	cursor: pointer;
	margin: 12px;

	@media screen and (max-width: 360px) {
		font-size: 24px;
	}
`;

export const IconDecrease = styled(IoIosRemoveCircleOutline)`
	color: #cd853f;
	cursor: pointer;
	margin: 12px;

	@media screen and (max-width: 360px) {
		font-size: 24px;
	}
`;

export const CloseItem = styled(IoCloseSharp)`
	font-size: 36px;

	@media screen and (max-width: 360px) {
		font-size: 26px;
	}
`;
