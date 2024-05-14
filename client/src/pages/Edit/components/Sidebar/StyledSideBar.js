import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapp = styled.div`
	background-color: #333;
	display: flex;
	flex-direction: column;
	margin: 20px 0 20px 10px;

	width: 190px;
	box-shadow: 0 0 5px #ccc;
`;

export const ButtonWrap = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: left;
	align-items: center;
	box-sizing: border-box;
	transition: background-color 0.4s ease;
	cursor: pointer;
	letter-spacing: 0.5px;
	font-size: 20px;

	&:hover {
		background-color: #555;
		transform: scale(1.02);
		color: rgb(25, 26, 28);
		background-color: rgb(152, 185, 95);
	}
`;

export const StyledLink = styled(Link)`
	font-weight: 400;
	font-size: 20px;
	line-height: 2;
	font-family: "Alegreya Sans SC", sans-serif;
	color: #ffffff;
	text-decoration: none;
`;
