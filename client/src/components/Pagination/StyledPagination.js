import styled from "styled-components";

export const PagesWrap = styled.div`
	margin-bottom: 60px;
`;

export const PagesList = styled.ul`
	display: flex;
	list-style: none;
	font-family: "Josefin Sans", sans-serif;

	@media screen and (max-width: 500px) {
		padding-left: 20px;
	}
`;

export const PagesListItem = styled.li`
	position: relative;
	color: #98b95f;
	text-transform: uppercase;
	font-size: 19px;
	font-weight: 600;
	letter-spacing: 1.5px;
	padding: 10px 16px;
	margin-left: 8px;
	transition: 0.2s;
	cursor: pointer;
	border-radius: 16px;
	box-shadow: 0 0 4px #98b95f;

	&:hover {
		transition-delay: 0.1s;
		box-shadow: 0 0 12px #98b95f;
	}

	&.active {
		transition-delay: 0.2s;
		box-shadow: 0 0 10px #98b95f, 0 0 10px #98b95f;
		background-color: #98b95f;
		color: rgb(25, 26, 28);
	}

	span {
		position: absolute;
		display: block;
	}

	@media screen and (max-width: 500px) {
		font-size: 16px;
		padding: 8px 14px;
	}
`;
