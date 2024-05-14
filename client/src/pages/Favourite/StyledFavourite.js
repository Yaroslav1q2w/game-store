import styled from "styled-components";

export const Container = styled.section`
	text-align: center;
	max-width: 1100px;
	margin: 0 auto;
	padding-bottom: 50px;
	padding: 0 14px;

	.empty-favorite {
		display: flex;
		justify-content: center;
		padding-top: 100px;
	}
`;

export const TitleFavourite = styled.h2`
	font-size: 32px;
	font-weight: bold;
	padding-top: 6px;
	font-family: "Alegreya Sans SC", sans-serif;

	@media screen and (max-width: 600px) {
		font-size: 22px;
	}
`;

export const FavoriteItems = styled.div`
	padding-top: 60px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: stretch;
	gap: 20px;
	position: relative;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
		padding-top: 30px;
		gap: 10px;
	}
`;
