/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	authSelector,
	basketSelector,
	favouriteSelector,
	registrationSelector,
	userSelector,
} from "../../selectors";
import { chengeCategory, fetchUserInfo, setPageCount } from "../../reducers";
import {
	HeaderContainer,
	HeaderWrapp,
	HeaderDescription,
	HomeIcon,
	ShoppingCartIcon,
	UserRegister,
	IconMyAccount,
	LinkMyAccount,
	Linklogin,
	EditIcon,
	EditLink,
} from "./StyledHeader";
import DropdownRegister from "./components/DropdownRegister";
import ShoppingBag from "./components/ShoppingBag/index.js";
import { useUserData } from "../../hooks/useUserData";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isShoppingBag, setIsShoppingBag] = useState(false);

	const dropdownRef = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const basketCount = useSelector(basketSelector);
	const favouriteCount = useSelector(favouriteSelector);
	const isAuth = useSelector(authSelector);
	const isRegistration = useSelector(registrationSelector);

	const userId = useUserData();

	useEffect(() => {
		localStorage.setItem("ShoppingCardCount", JSON.stringify(basketCount));
		localStorage.setItem("FavouriteCount", JSON.stringify(favouriteCount));
	}, [basketCount, favouriteCount]);

	useEffect(() => {
		const handleClick = (event) => {
			if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
				return;
			}
			setIsOpen(false);
		};
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	const LogoOnclick = () => {
		dispatch(chengeCategory(0));
		dispatch(setPageCount(1));
	};

	const toggleDropdown = (event) => {
		event.stopPropagation();
		setIsOpen(!isOpen);
	};

	const handlerCloseForm = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (isAuth) {
			setIsOpen(false);
			navigate("/");
		}

		if (isRegistration) navigate("/");
	}, [isAuth, isRegistration]);

	const buttonAuthorization = userId ? (
		<LinkMyAccount to="/api/my-account">
			<UserRegister>
				<IconMyAccount />
				<span>My account</span>
			</UserRegister>
		</LinkMyAccount>
	) : (
		<Linklogin>
			<UserRegister onClick={toggleDropdown}>
				<IconMyAccount />
				<span>Sign Up / Log In</span>
			</UserRegister>
		</Linklogin>
	);

	return (
		<HeaderContainer>
			<HeaderWrapp>
				<Link to="/" onClick={LogoOnclick}>
					<div className="header__logo">
						<h3 className="logo">Game Store</h3>
						<p className="header__logo-text">магазин комп'ютерних ігор</p>
					</div>
				</Link>
				<HeaderDescription>
					<Link to="/" className="header__homepage">
						<HomeIcon />
					</Link>

					<a
						href="#"
						onClick={() => setIsShoppingBag(!isShoppingBag)}
						className="header__basket"
					>
						<ShoppingCartIcon />
						<span>{basketCount.length + favouriteCount.length}</span>
					</a>

					{userId?.isAdmin && (
						<EditLink to="/api/edit">
							<EditIcon />
						</EditLink>
					)}

					{buttonAuthorization}
				</HeaderDescription>

				<DropdownRegister
					active={isOpen ? "auto" : 0}
					ref={dropdownRef}
					closeFormPages={handlerCloseForm}
				/>

				<ShoppingBag
					isShoppingBag={isShoppingBag}
					closeShoppingBag={() => setIsShoppingBag(!isShoppingBag)}
				/>
			</HeaderWrapp>
		</HeaderContainer>
	);
};

export default Header;
