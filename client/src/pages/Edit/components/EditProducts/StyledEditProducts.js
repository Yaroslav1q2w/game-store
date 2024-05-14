import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const Container = styled.div`
	position: relative;
`;
export const Title = styled.h2`
	color: rgb(255, 215, 0);
	letter-spacing: 0.5px;
	font-size: 30px;
	letter-spacing: 1.5px;
	font-weight: 500;
	font-family: "Alegreya Sans SC", sans-serif;
`;

export const ButtonProduct = styled.button`
	font-size: 12px;
	padding: 14px;
	letter-spacing: 1px;
	color: rgb(250, 250, 250);
	background: green;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.5s ease 0s;
	text-decoration: none;
	text-transform: uppercase;
	position: absolute;
	right: 0;
	top: 0;
	transition: 0.5s;

	:hover {
		background-color: #37932a;
	}
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 30px;
	font-size: 18px;
	font-family: "Alegreya Sans SC", sans-serif;
`;

export const Th = styled.th`
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
	background-color: #f2f2f2;
	color: #212121;
`;

export const Td = styled.td`
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
`;

// MODAL FORM

export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: flex-start;
	overflow-y: auto;
	padding-top: 40px;
	padding-bottom: 40px;
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

export const ModalContent = styled.div`
	margin: 0 auto;
	background: #fff;
	padding: 20px;
	border-radius: 5px;
	max-width: 420px;
	width: 100%;
	margin-bottom: 100px;
	position: relative;
`;
export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-top: 10px;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;

	.input__elem {
		border: none;
		border-bottom: 1px solid #ccc;
		background: none;
		font-family: "Alegreya Sans SC", sans-serif;
		outline: none;
		margin-top: 10px;
		transition: 0.4s;
		font-size: 16px;
		color: #a3a3a3;
		padding: 10px;
		border-radius: 0;
		width: 100%;
		box-sizing: border-box;

		:hover {
			border-bottom: 1px solid #9e9d9d;
		}

		:focus {
			border-bottom: 1px solid #9dfac1;
		}

		::placeholder {
			color: rgb(131, 130, 130);
			font-size: 15px;
			letter-spacing: 1.4px;
		}
	}
`;

export const StyledButton = styled.button`
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
	margin-top: 30px;

	:hover {
		background-color: #37932a;
	}
`;

export const IconClose = styled(IoIosCloseCircleOutline)`
	font-size: 26px;
	color: rgb(131, 130, 130);
	position: absolute;
	top: 14px;
	right: 20px;
	cursor: pointer;
`;
