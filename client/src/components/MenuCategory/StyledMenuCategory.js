import styled from "styled-components";

export const CategoryWrap = styled.div`
	margin-left: 6px;
`;

export const CategoryList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	font-family: "Alegreya Sans SC", sans-serif;
`;

export const CategoryListItem = styled.li`
	position: relative;
	color: #fff5cc;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 14px;
	letter-spacing: 1.5px;
	overflow: hidden;
	padding: 12px;
	margin-left: 8px;
	transition: 0.3s;
	cursor: pointer;
	border-radius: 8px;

	&.active {
		transition-delay: 0.2s;
		background-color: #98b95f;
		box-shadow: 0 0 10px #98b95f, 0 0 10px #98b95f;
		color: rgb(25, 26, 28);
	}

	&:hover {
		transition-delay: 0.3s;
		box-shadow: 0 0 10px #98b95f;
	}

	span {
		position: absolute;
		display: block;
	}

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const MenuBurgerBtn = styled.div`
	@media screen and (max-width: 600px) {
		position: absolute;
		right: 24px;

		cursor: pointer;

		&::before,
		&::after {
			content: "";
			position: absolute;
			width: 30px;
			height: 4px;
			background-color: #98b95f;
			box-shadow: 0 0 10px #98b95f;
			border-radius: 2px;
			transition: all 0.5s ease-in-out;
		}
		&::before {
			transform: translateY(-9px);
		}
		&::after {
			transform: translateY(5px);
		}
		&.active::before {
			transform: rotate(45deg);
		}
		&.active::after {
			transform: scale(0);
			transition: all 0.5s ease-in-out;
		}

		.menu__burger-inner {
			right: 0;
			border-radius: 2px;
			width: 30px;
			height: 4px;
			background-color: #98b95f;
			box-shadow: 0 0 10px #98b95f, 0 0 10px #98b95f;
			transition: all 0.5s ease-in-out;

			&.active {
				transform: rotate(-45deg);
				transition: all 0.5s ease-in-out;
			}
		}
	}
`;

export const MenuBurger = styled.div`
	opacity: 0;
	height: 0;
	max-height: 1000px;
	overflow: hidden;
	transition: opacity 0.6s ease-in-out, max-height 0.3s ease-in-out;
	background: #333333;
	border-radius: 10px;
	box-shadow: 0px 0px 6px rgb(51, 51, 51);
	position: absolute;
	right: 28px;
	top: 26px;
	z-index: 2;

	&.active {
		opacity: 1;
		height: auto;
		max-height: 1000px;
	}
`;

export const MenuBurgerList = styled.ul`
	list-style: none;
	z-index: 10;
	padding: 10px 10px 10px 8px;
`;

export const CategoryBurgerMenu = styled.li`
	color: #fff5cc;
	text-transform: uppercase;
	font-weight: 600;
	position: relative;
	font-size: 11px;
	letter-spacing: 1.5px;
	overflow: hidden;
	padding: 10px 40px 10px 10px;
	transition: 0.3s;
	cursor: pointer;
	border-radius: 8px;

	&.active {
		transition-delay: 0.2s;
		background-color: #98b95f;
		box-shadow: 0 0 10px #98b95f, 0 0 10px #98b95f;
		color: rgb(25, 26, 28);
	}

	&:hover {
		transition-delay: 0.3s;
		box-shadow: 0 0 10px #98b95f;
	}

	span {
		position: absolute;
		display: block;
	}
`;
