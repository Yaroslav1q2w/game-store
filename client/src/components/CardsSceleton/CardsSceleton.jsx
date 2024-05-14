import ContentLoader from "react-content-loader";
import styled from "styled-components";

const SceletonWrap = styled(ContentLoader)`
	width: 320px;
	min-height: 300px;
	background-color: rgb(36, 37, 41);
	border-radius: 15px;
	position: relative;
	margin-bottom: 30px;
	justify-self: center;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const CardsSceleton = (props) => (
	<SceletonWrap
		speed={2}
		viewBox="0 0 320 370"
		backgroundColor="#4d4c4c"
		foregroundColor="#726969"
		{...props}
	>
		<rect x="336" y="166" rx="3" ry="3" width="178" height="6" />
		<rect x="0" y="-3" rx="0" ry="0" width="320" height="182" />
		<rect x="-1" y="191" rx="10" ry="10" width="321" height="66" />
		<rect x="13" y="322" rx="5" ry="5" width="80" height="18" />
		<rect x="139" y="315" rx="10" ry="10" width="140" height="35" />
		<rect x="19" y="275" rx="15" ry="15" width="129" height="25" />
	</SceletonWrap>
);

export default CardsSceleton;
