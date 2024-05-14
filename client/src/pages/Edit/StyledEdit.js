import styled from "styled-components";

export const EditWrapper = styled.div`
	display: flex;
	justify-content: center;
	transition: background-color 0.3s ease;
	min-height: 100vh;
	overflow: hidden;
`;

export const EditInner = styled.div`
	max-width: 1170px;
	width: 100%;
	padding: 0 10px;
	transition: transform 0.3s ease;
	display: flex;
	justify-content: space-between;
	align-items: start;
`;

export const RoutersWrapper = styled.div`
	text-align: center;
	margin: 20px 20px;
	padding: 20px;
	background-color: #333;
	box-shadow: 0 0 5px #ccc;
	width: 890px;
`;
