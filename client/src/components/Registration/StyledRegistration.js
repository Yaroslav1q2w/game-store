import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 100px 20px 100px;
`;

export const BoxWrappRegister = styled.div`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 30px;
	letter-spacing: 2px;
	text-align: center;
	margin-bottom: 60px;
	color: #ccc;
	font-weight: 600;

	@media screen and (max-width: 500px) {
		margin-bottom: 20px;
	}
`;

export const Title = styled.div`
	cursor: pointer;
	position: relative;
	display: inline-block;
	line-height: 1.5;
	margin-bottom: 10px;
	transition: color 0.3s ease, padding-bottom 0.3s ease;

	&::before,
	&::after {
		content: "";
		position: absolute;
		height: 2px;
		width: 0;
		bottom: 0;
		transition: width 0.3s ease;
		background-color: rgb(250, 203, 125);
	}

	&::before {
		left: 50%;
	}

	&::after {
		right: 50%;
	}

	&.active {
		color: rgb(250, 203, 125);
		padding-bottom: 0;

		&::before,
		&::after {
			width: 50%;
		}

		&::before {
			left: 0;
		}

		&::after {
			right: 0;
		}
	}

	@media screen and (max-width: 500px) {
		font-size: 26px;
	}
`;

export const ContentForm = styled.div`
	display: flex;
	justify-content: center;
`;
export const FormItem = styled.div`
	max-width: 400px;
	width: 100%;
	padding: 0 26px 0 0;
`;
