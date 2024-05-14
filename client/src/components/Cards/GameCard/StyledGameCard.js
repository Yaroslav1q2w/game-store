import styled from "styled-components";

export const Wrapper = styled.div`
	color: white;
	max-width: 320px;
	min-height: 320px;
	background-color: rgb(36, 37, 41);
	border-radius: 15px;
	position: relative;
	margin-bottom: 30px;
	justify-self: center;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
`;

export const ImageItem = styled.div`
	cursor: pointer;
	position: relative;
	transition: all 0.5s ease;
	overflow: hidden;
	max-width: 320px;
	height: 180px;
	border-radius: 15px 15px 0 0;

	img {
		transition: all 0.5s ease;
		width: 100%;
		max-height: 180px;
	}

	&:hover img {
		transform: scale(1.08);
		transition: all 0.5s ease;
	}

	&:hover:before {
		opacity: 1;
	}

	&:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(14, 14, 14, 0.8);
		transition: all 0.5s ease;
		opacity: 0;
		z-index: 1;
	}
`;

export const GameBack = styled.div`
	position: absolute;
	max-width: 320px;
	height: 180px;
	top: 0;
	text-align: center;
	z-index: 1;
	transition: all 3s ease;
`;

export const GameBackWrapp = styled.div`
	letter-spacing: 1px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: all 0.5s ease;

	&:hover {
		animation: ani 1s forwards;
	}

	.game__back-title {
		padding: 10px;
		font-size: 18px;
		font-weight: 800;
	}

	.game__back-desc {
		font-size: 13px;
		line-height: 1.3;
		padding: 0 10px 10px 30px;
		font-family: "Alegreya Sans SC", sans-serif;
	}

	.game__back-link {
		padding-bottom: 12px;

		.link {
			font-size: 12px;
			transition: 0.5s;
			font-weight: 600;
			text-transform: uppercase;
			text-decoration: underline;

			&:hover {
				color: #daa266;
				display: inline-block;
				transition: 0.3s;
			}
		}
	}
`;

export const Details = styled.div`
	padding: 0 35px 10px 20px;
	position: relative;
	letter-spacing: 1px;
	word-spacing: 1px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	.game__title-wrapp {
		margin-bottom: 10px;
		height: 90px;

		@media screen and (max-width: 500px) {
			height: 70px;
		}
	}

	@media screen and (max-width: 500px) {
		padding: 0 30px 10px 20px;
	}
`;

export const HeaderGame = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	.title {
		padding-top: 14px;
		font-size: 19px;
		font-weight: bold;
		margin: 0;
		transition: 0.3s;

		&:hover {
			color: #949494;
			transition: 0.3s;
		}

		@media screen and (max-width: 500px) {
			font-size: 16px;
		}
	}

	.star-icon {
		position: absolute;
		top: 17px;
		right: 7px;
		cursor: pointer;
	}
`;

export const Article = styled.span`
	display: inline-block;
	padding-top: 8px;
	font-size: 13px;
	font-weight: 200;
	color: #7a7a7a;
	font-family: "Alegreya Sans SC", sans-serif;

	@media screen and (max-width: 500px) {
		font-size: 10px;
	}
`;

export const Genre = styled.span`
	background-color: rgb(60, 60, 63);
	font-size: 14px;
	font-weight: 600;
	display: inline-block;
	padding: 5px 20px;
	border-radius: 20px;
	letter-spacing: 1.5px;
	color: #c9c8c8;
	font-family: "Alegreya Sans SC", sans-serif;

	@media screen and (max-width: 500px) {
		font-size: 11px;
	}
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	position: relative;

	.game__item-price {
		font-size: 16px;

		@media screen and (max-width: 500px) {
			font-size: 14px;
		}
	}

	.button {
		font-family: "Alegreya Sans SC", sans-serif;

		font-style: normal;
		width: 140px;
		height: 35px;
		color: #fafafa;
		background: #8b4513;
		box-shadow: 0px 0px 8px #8b4513;
		border: 0;
		border-radius: 10px;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;
		letter-spacing: 0.8px;
		font-size: 14px;

		&:hover {
			background: #a0522d;
		}
	}
`;
