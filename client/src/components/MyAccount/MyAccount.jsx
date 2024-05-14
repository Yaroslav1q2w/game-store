import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../hooks/useUserData";

import {
	Wrapper,
	ContentInner,
	Header,
	MainButtons,
	ButtonItem,
	IconOrders,
	IconFavourite,
	IconExit,
} from "./StyledMyAccount";
import {
	clearDataAuth,
	clearDataRegister,
	fetchUserInfo,
} from "../../reducers";
import { Link, useNavigate } from "react-router-dom";
import { userSelector } from "../../selectors";
import { useEffect } from "react";

const MyAccount = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector(userSelector);
	const userId = useUserData();
	console.log(user);

	const ExitUser = () => {
		dispatch(clearDataRegister());
		dispatch(clearDataAuth());

		navigate("/");
	};
	useEffect(() => {
		dispatch(fetchUserInfo(userId._id));
	}, []);

	return (
		<Wrapper>
			<ContentInner>
				<Header>
					<span>Hello, </span> {user?.firstName} {user?.lastName}
				</Header>
				<MainButtons>
					<Link to={"my-orders"}>
						<ButtonItem>
							<IconOrders />
							<span>Мої Замовлення</span>
						</ButtonItem>
					</Link>

					{/* <ButtonItem>
						<IconFavourite />
						<span>Вибрані</span>
					</ButtonItem> */}
					<ButtonItem onClick={ExitUser}>
						<IconExit />
						<span>Вийти</span>
					</ButtonItem>
				</MainButtons>
			</ContentInner>
		</Wrapper>
	);
};

export default MyAccount;
