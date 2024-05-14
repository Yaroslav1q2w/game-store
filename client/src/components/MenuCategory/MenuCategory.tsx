import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { chengeCategory, setPageCount } from "../../reducers";
import { categorySelector } from "../../selectors";

import {
	CategoryList,
	CategoryListItem,
	CategoryWrap,
	MenuBurgerBtn,
	MenuBurger,
	CategoryBurgerMenu,
	MenuBurgerList,
} from "./StyledMenuCategory";

const MenuCategory = () => {
	const dispatch = useDispatch();
	const indexCategory = useSelector(categorySelector);
	const [menuBurgerOpen, setMenuBurgerOpen] = useState(false);

	const categories = [
		"Всі",
		"Шутер",
		"Екшен",
		"Пригоди",
		"Спорт",
		"Гонки",
		"Стратегії",
	];

	const onChengeCategory = (index: number) => {
		dispatch(chengeCategory(index));
		dispatch(setPageCount(1));
	};

	const handleMenuToggle = () => {
		setMenuBurgerOpen(!menuBurgerOpen);
	};

	return (
		<CategoryWrap>
			<CategoryList>
				{categories.map((item, index) => (
					<CategoryListItem
						className={indexCategory === index ? "active" : ""}
						onClick={() => onChengeCategory(index)}
						key={index}
					>
						{item}
					</CategoryListItem>
				))}
			</CategoryList>

			<MenuBurgerBtn
				onClick={handleMenuToggle}
				className={menuBurgerOpen ? "active" : ""}
			>
				<div
					className={`menu__burger-inner ${menuBurgerOpen ? "active" : ""}`}
				></div>
			</MenuBurgerBtn>

			<MenuBurger className={menuBurgerOpen ? "active" : ""}>
				<MenuBurgerList>
					{categories.map((item, index) => (
						<CategoryBurgerMenu
							className={indexCategory === index ? "active" : ""}
							onClick={() => {
								onChengeCategory(index);
								handleMenuToggle();
							}}
							key={index}
						>
							{item}
						</CategoryBurgerMenu>
					))}
				</MenuBurgerList>
			</MenuBurger>
		</CategoryWrap>
	);
};

export default MenuCategory;
