import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	margin: 20px;

	@media screen and (max-width: 820px) {
		width: 70%;
	}
`;

export const Input = styled.input`
	padding: 10px;
	margin-right: 8px;
	border: none;
	border-bottom: 1px solid #ccc;
	background-color: transparent;
	width: 100%;
	color: rgb(255, 245, 204);
	outline: none;
	font-family: "Alegreya Sans SC", sans-serif;
	border-radius: 0;
	transition: border 0.4s;

	::placeholder {
		color: rgb(255, 245, 204);
		color: #ccc;
		font-size: 15px;
	}

	:focus {
		border-bottom: 1px solid green;
	}
`;
