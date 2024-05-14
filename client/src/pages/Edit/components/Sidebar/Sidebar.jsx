import { SidebarWrapp, StyledLink, ButtonWrap } from "./StyledSideBar";

function Sidebar() {
	return (
		<SidebarWrapp>
			<StyledLink to="products">
				<ButtonWrap>Продукти</ButtonWrap>
			</StyledLink>

			<StyledLink to="users">
				<ButtonWrap>Користувачі</ButtonWrap>
			</StyledLink>

			<StyledLink to="orders">
				<ButtonWrap>Замовлення</ButtonWrap>
			</StyledLink>
		</SidebarWrapp>
	);
}

export default Sidebar;
