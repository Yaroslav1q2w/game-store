import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
`;

export const InputsWrappRegister = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	letter-spacing: 1px;
	padding-top: 40px;

	.form__elem-register {
		border: none;
		border-bottom: 1px solid #ccc;
		background: none;
		font-family: "Alegreya Sans SC", sans-serif;
		outline: none;
		width: 100%;
		margin-top: 10px;
		transition: 0.4s;
		font-size: 15px;
		color: #a3a3a3;
		padding: 10px;
		border-radius: 0;

		:hover {
			border-bottom: 1px solid #9e9d9d;
		}

		:focus {
			border-bottom: 1px solid #9dfac1;
		}
		::placeholder {
			color: rgb(131, 130, 130);
			font-size: 13px;
			letter-spacing: 1.4px;
		}
	}

	.label__text {
		text-transform: uppercase;
		color: #facb7d;
		font-weight: 500;
		font-size: 13px;
		letter-spacing: 1.4px;
		line-height: 16px;
	}
`;

export const Header = styled.div`
	color: white;
	text-align: center;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5;
	letter-spacing: 1px;
	font-family: "Alegreya Sans SC", sans-serif;
`;

export const ButtonRegister = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;

	button {
		border: none;
		font-family: "Alegreya Sans SC", sans-serif;
		font-size: 18px;
		padding: 14px 50px;
		background-color: green;
		text-transform: uppercase;
		color: #fff;
		cursor: pointer;
		letter-spacing: 2px;
		transition: 0.5s;

		:hover {
			background-color: #37932a;
		}
	}
`;

export const ErrorMessage = styled.div`
	padding: 5px 0 0 15px;
	margin: 0;
	text-align: left;
	color: #fb7063;
	font-size: 17px;
	border-bottom: none;
	font-weight: 500;
	font-family: "Alegreya Sans SC", sans-serif;
`;
