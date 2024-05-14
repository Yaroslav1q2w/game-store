import styled from "styled-components";
import AnimateHeight from "react-animate-height";
import { Link } from "react-router-dom";

export const WrappAnimate = styled(AnimateHeight)`
	background: rgb(50, 50, 50);
	position: absolute;
	top: 90px;
	right: 100px;
	z-index: 10;
	width: 360px;
	border-radius: 2px;
	box-shadow: 0 0 16px #a1a0a6;

	@media screen and (max-width: 500px) {
		width: 260px;
		right: 30px;
	}
`;

export const BoxWrapp = styled.div`
	padding: 40px 10px;
	font-family: "Alegreya Sans SC", sans-serif;
`;

export const Header = styled.div`
	text-align: center;
	position: relative;
	margin: 10px 0;

	:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 1;
		height: 1px;
		width: 100%;
		background-color: #949c9e;
	}

	.details {
		display: inline-block;
		padding: 6px 20px;
		color: #000;
		font-weight: 400;
		position: relative;
		z-index: 2;
		background-color: rgb(152, 185, 95);
		border-radius: 6px;
		font-size: 17px;
	}
`;

export const InputsWrapp = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	gap: 24px;

	.form__elem {
		color: #dad9d9;
		padding: 10px;
		background: none;
		font-family: "Alegreya Sans SC", sans-serif;
		border: none;
		border-bottom: 1px solid #ccc;
		outline: none;
		width: 320px;
		border-radius: 0;

		&:focus {
			border-bottom: 1px solid green;
		}
		&::placeholder {
			color: #ccc;
			font-size: 15px;
			font-family: "Alegreya Sans SC", sans-serif;
		}

		@media screen and (max-width: 500px) {
			width: 220px;
		}
	}

	.password {
		font-size: 16px;
	}
`;

export const ButtonBlock = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;

	button {
		border: none;
		font-family: "Alegreya Sans SC", sans-serif;
		font-size: 16px;
		padding: 10px 50px;
		background-color: green;
		text-transform: uppercase;
		color: #fff;
		cursor: pointer;
		letter-spacing: 1px;
		transition: 0.5s;

		:hover {
			background-color: #37932a;
		}
	}
`;

export const FormPages = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
	font-size: 16px;
	line-height: 1;
	color: #949c9e;
	align-items: center;
`;

export const LinkItem = styled(Link)`
	display: inline-block;
	padding-left: 6px;
	text-decoration: none;
	font-family: "Josefin Sans";
	font-weight: 400;
	font-size: 16px;
	color: #00a1ef !important;
	cursor: pointer;
	transition: 0.4s;

	:hover {
		color: #03bef5 !important;
	}
`;

export const ErrorMessage = styled.div`
	padding: 5px 0 0 15px;
	margin: 0;
	text-align: left;
	color: #fb7063;
	font-size: 15px;
	border-bottom: none;
	font-weight: normal;
	font-family: "Alegreya Sans SC", sans-serif;
`;
