import styled from "styled-components";

export const Container = styled.section`
	position: relative;

	.page__game-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 600px;
		background-size: cover;

		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.8);

			@media screen and (max-width: 900px) {
				background-color: rgba(0, 0, 0, 0.5);
			}
		}
	}
`;

export const ContainerWrapp = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	padding: 0 30px;
	box-sizing: border-box;

	@media screen and (max-width: 700px) {
		padding: 0 10px;
	}
`;

export const MainWrapp = styled.div`
	position: relative;
	max-width: 1100px;
	margin: 0 auto;
	line-height: 1.7;
	letter-spacing: 1.5px;
	word-spacing: 1px;
	padding-bottom: 50px;
	padding-top: 100px;

	.main__wrap-header {
		display: flex;
		align-items: top;
	}

	.btn-back {
		position: absolute;
		top: 16px;
		display: block;
		width: 36px;
		transform: rotate(180deg);

		&:hover,
		&:focus {
			svg {
				transform: translateX(10px);
			}
		}

		svg {
			fill: #fff;
			transform: translateX(0);
			transition: transform 0.8s;
		}
	}

	@media screen and (max-width: 900px) {
		padding-top: 40px;
	}
`;

export const HeaderPoster = styled.div`
	padding-right: 30px;
	width: 100%;
	max-width: 580px;
	flex-shrink: 0;

	img {
		width: 100%;
	}

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export const HeaderContent = styled.div`
	font-family: "Alegreya Sans SC", sans-serif;
	padding: 20px;
	color: #fff;
	width: 100%;

	@media screen and (max-width: 600px) {
		padding: 4px;
	}

	.game__page-title {
		padding: 0;
		font-size: 38px;
		font-weight: 700;
		text-align: center;
		text-shadow: 0px 3px 2px #5b5b5d;
		font-family: "Josefin Sans", sans-serif;

		@media screen and (max-width: 500px) {
			font-size: 24px;
		}
	}

	.game__page-subname {
		font-style: italic;
		font-size: 28px;
		text-align: center;
		margin-bottom: 35px;
		line-height: 1;
		font-family: "Josefin Sans", sans-serif;

		@media screen and (max-width: 500px) {
			font-size: 18px;
		}
	}

	.game__page-info {
		padding: 0;
		margin-top: 14px;
		font-size: 19px;
		font-weight: 700;
		line-height: 1.3;
		letter-spacing: 1px;
		word-spacing: 1px;
		color: rgb(255, 215, 0);

		@media screen and (max-width: 500px) {
			font-size: 15px;
		}
	}

	.colored {
		font-size: 17px;
		font-weight: 400;
		padding-left: 10px;
		color: #fff;

		@media screen and (max-width: 500px) {
			font-size: 13px;
		}
	}
`;

export const PageDescription = styled.div`
	font-size: 17px;
	padding-top: 10px;
	max-width: 800px;
	margin: 50px auto 120px;
	line-height: 1.7;
	letter-spacing: 1.5px;
	word-spacing: 1px;
	text-align: center;
	font-family: "Alegreya Sans SC", sans-serif;

	font-weight: bold;

	@media screen and (max-width: 500px) {
		font-size: 13px;
		margin: 20px 0 100px;
	}
`;

export const FooterButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	right: 400px;
	bottom: 60px;
	position: absolute;

	.footer__button-elem {
		font-family: "Alegreya Sans SC", sans-serif;

		font-style: normal;
		color: #fafafa;
		padding: 12px 14px;
		background: #00481e;
		border: 0;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;
		letter-spacing: 0.8px;
		font-size: 15px;

		&:hover {
			background: #01722b;
			box-shadow: 0px 0px 14px #01722b;
		}

		@media screen and (max-width: 500px) {
			font-size: 12px;
		}
	}

	@media screen and (max-width: 900px) {
		right: 100px;
	}

	@media screen and (max-width: 500px) {
		right: 40px;
	}
`;
