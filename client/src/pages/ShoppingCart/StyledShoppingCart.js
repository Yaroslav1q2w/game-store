import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	max-width: 1180px;
	margin: 0 auto;
	padding: 0 20px;

	@media screen and (max-width: 700px) {
		padding: 0 10px;
	}
`;

export const Header = styled.header`
	h1 {
		font-size: 32px;
		font-weight: bold;
		text-align: center;
		padding-top: 6px;
		font-family: "Alegreya Sans SC", sans-serif;

		@media screen and (max-width: 700px) {
			font-size: 22px;
		}
	}
`;

export const HeaderInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 10px 10px 0;

	.total__price {
		display: inline-block;
		top: 50px;
		left: 20px;
		letter-spacing: 1px;
		word-spacing: 1px;
		font-size: 20px;
		border: 1px solid #cd853f;
		padding: 10px 20px;
		border-radius: 6px;
		font-family: "Alegreya Sans SC", sans-serif;

		@media screen and (max-width: 700px) {
			top: 50px;
			left: 20px;
			letter-spacing: 1px;
			word-spacing: 1px;
			font-size: 12px;
			border: 1px solid #cd853f;
			padding: 10px 20px;
			border-radius: 20px;
		}
	}

	@media screen and (max-width: 420px) {
		flex-direction: column;
		gap: 20px;
	}
`;

export const ButtonSubmit = styled.div`
	right: 20px;
	top: 44px;

	.basket__button-elem {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		padding: 12px;
		color: #fafafa;
		background: #9f5e08;
		border: 0;
		border-radius: 4px;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;
		letter-spacing: 0.8px;
		font-family: "Alegreya Sans SC", sans-serif;

		&:hover {
			background: #623a00;
		}

		@media screen and (max-width: 700px) {
			font-size: 10px;
		}
	}
`;

export const BasketItems = styled.div`
	padding: 80px 12px 0px;

	.empty-basket {
		font-size: 30px;
		font-weight: bold;
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 700px) {
		padding: 40px 12px 0px;
	}
`;

export const Quantity = styled.div``;
