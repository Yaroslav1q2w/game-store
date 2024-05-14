import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { BiCartAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
	background-color: #282828;
	box-shadow: 0px 8px 10px 0px #282828;
`;

export const HeaderWrapp = styled.div`
	height: 80px;
	max-width: 1180px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	position: relative;

	.header__logo {
		.logo {
			font-size: 34px;
			font-weight: bold;
			padding-bottom: 3px;
			text-shadow: 2px 2px 1px #995400;
			color: #ffd700;
			margin: 0;

			@media screen and (max-width: 600px) {
				font-size: 26px;
			}
		}

		&-text {
			font-size: 12px;
			font-weight: 600;
			text-transform: uppercase;
			text-shadow: 1px 1px 1px #5b5b5d;
			color: #c0c0c0;
			font-family: "Alegreya Sans SC", sans-serif;
			@media screen and (max-width: 600px) {
				font-size: 8px;
			}
		}
	}

	@media screen and (max-width: 500px) {
		padding: 0 10px;
	}
`;

export const HeaderDescription = styled.div`
	display: flex;
	align-items: center;

	.header__basket {
		padding: 5px;
		cursor: pointer;
		font-size: 14px;
		transition: all 0.5s ease 0s;

		&:hover {
			color: rgb(255, 223, 52);
		}

		@media screen and (max-width: 500px) {
			padding: 2px;
		}
	}

	.header__homepage {
		padding-right: 12px;
		cursor: pointer;
		transition: all 0.5s ease 0s;

		&:hover {
			color: rgb(255, 223, 52);
		}

		@media screen and (max-width: 350px) {
			padding: 9px;
		}
	}
`;

export const UserRegister = styled.button`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	background: none;
	border: none;
	color: #fff;
	font-family: "Josefin Sans", sans-serif;
	font-size: 14px;
	transition: all 0.5s ease 0s;

	&:hover {
		color: rgb(255, 223, 52);
	}

	span {
		@media screen and (max-width: 500px) {
			display: none;
		}
	}
`;

export const EditLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px 0;
	transition: all 0.5s ease 0s;

	&:hover {
		color: rgb(255, 223, 52);
	}
`;

export const Linklogin = styled.div`
	margin-left: 14px;

	@media screen and (max-width: 340px) {
		margin-left: 6px;
	}
`;

export const LinkMyAccount = styled(Link)`
	margin-left: 14px;

	@media screen and (max-width: 340px) {
		margin-left: 6px;
	}
`;

export const HomeIcon = styled(AiOutlineHome)`
	font-size: 28px;

	@media screen and (max-width: 340px) {
		font-size: 24px;
	}
`;

export const ShoppingCartIcon = styled(BiCartAlt)`
	font-size: 25px;

	@media screen and (max-width: 340px) {
		font-size: 21px;
	}
`;

export const IconMyAccount = styled(FaUserCircle)`
	font-size: 22px;
`;

export const EditIcon = styled(IoSettingsSharp)`
	font-size: 22px;
	margin-left: 14px;

	@media screen and (max-width: 340px) {
		margin-left: 8px;
	}
`;
