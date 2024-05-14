import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	max-width: 1100px;
	margin: 50px auto;
`;

export const HeaderNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
		gap: 10px;
	}
`;

export const SectionGames = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 46px 30px 0;
	gap: 10px 40px;
	margin-bottom: 20px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 690px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 400px) {
		gap: 10px 20px;
		padding: 30px 10px;
	}
`;
