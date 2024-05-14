import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const Wrapper = styled.div`
	color: white;
	position: relative;
	margin-bottom: 20px;
	display: flex;

	@media screen and (max-width: 460px) {
		flex-direction: column;
		border-bottom: 1px solid #343434;
		align-items: center;
		padding-bottom: 16px;
	}

	&:nth-child(odd) {
		border-right: 1px solid #343434;

		@media screen and (max-width: 460px) {
			border-right: none;
		}
	}

	img {
		max-width: 280px;
		height: 160px;
		width: 100%;

		@media screen and (max-width: 460px) {
			height: auto;
		}
	}
`;

export const ItemDetails = styled.div`
	padding: 0 20px;
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (max-width: 600px) {
		padding: 0 13px;
	}

	@media screen and (max-width: 460px) {
		flex-direction: row;
	}
`;

export const Header = styled.div`
	text-align: start;

	@media screen and (max-width: 460px) {
		padding-top: 10px;
	}

	.favorite__item-title {
		padding-top: 5px;
		font-size: 20px;
		font-weight: bold;
		margin: 0;
		transition: 0.3s;

		&:hover {
			color: #777777;
			transition: 0.3s;
		}

		@media screen and (max-width: 600px) {
			font-size: 16px;
			padding-right: 6px;
		}
	}

	.favorite__item-article {
		display: inline-block;
		padding-top: 8px;
		font-size: 14px;
		font-weight: 200;
		color: #7a7a7a;
		font-family: "Alegreya Sans SC", sans-serif;

		@media screen and (max-width: 600px) {
			font-size: 10px;
		}
	}

	.favorite__item-genre {
		font-size: 14px;
		font-weight: 600;
		padding: 3px 10px;
		letter-spacing: 1.5px;
		color: #2196f3;
		display: block;
		margin-top: 20px;
		font-family: "Alegreya Sans SC", sans-serif;

		@media screen and (max-width: 460px) {
			font-size: 12px;
			margin-top: 8px;
		}
	}
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	font-size: 14px;
	position: relative;

	@media screen and (max-width: 460px) {
		margin-top: 0px;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 18px;
	}

	.favorite__item-price {
		font-size: 16px;

		@media screen and (max-width: 460px) {
			font-size: 12px;
		}
	}

	.close-card {
		cursor: pointer;
	}
`;

export const StarIcon = styled(AiFillStar)`
	font-size: 30px;

	@media screen and (max-width: 460px) {
		font-size: 23px;
	}
`;
