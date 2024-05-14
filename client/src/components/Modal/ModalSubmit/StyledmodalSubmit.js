import styled from "styled-components";

export const ModalContainer = styled.div`
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	opacity: 0;
	animation: ani 0.6s forwards;

	@keyframes ani {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const ModalWrapp = styled.div`
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	background-color: #fff;
	max-width: 400px;

	z-index: 1;
	text-align: center;
	margin: 0 10px;

	.modal__submit-content {
		color: #000;
		font-size: 20px;
		line-height: 1.5;
		font-weight: 500;
		padding: 15px 15px 20px 15px;
		letter-spacing: 1px;

		hr {
			margin: 10px 0 10px 0;
		}
	}
`;

export const ButtonContainer = styled.div`
	padding-bottom: 10px;

	.button__submit_form {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		width: 140px;
		height: 35px;
		color: #fafafa;
		background: green;
		border: 0;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;

		&:hover {
			background: #016c1f;
		}
	}
`;
