import { Drawer } from "@mui/material";
import {
	Wrappper,
	Header,
	CardWrapp,
	ImageWrapp,
	Description,
	NameItem,
	Price,
	CloseItem,
	Cards,
	FooterContent,
	TotalPrice,
	ButtonShoppingBag,
	IconText,
	Text,
	FavouriteIcon,
	FavouriteWrapp,
} from "./StyledShoppingBag";
import { basketSelector, favouriteSelector } from "../../../../selectors";
import { useDispatch, useSelector } from "react-redux";
import { decreaseBasket } from "../../../../reducers";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ShoppingBag = ({ isShoppingBag, closeShoppingBag }) => {
	const dispatch = useDispatch();

	const cards = useSelector(basketSelector);
	const favouriteCount = useSelector(favouriteSelector);

	const totalPrice = cards?.reduce((acum, elem) => acum + elem.price, 0);

	const renderCards = cards?.map((card) => (
		<CardWrapp key={card._id}>
			<ImageWrapp>
				<img src={card.image} alt="" />
			</ImageWrapp>
			<Description>
				<NameItem>{card.title}</NameItem>
				<Price>
					<span className="price">{card.price} грн.</span>
				</Price>
			</Description>

			<CloseItem onClick={() => dispatch(decreaseBasket(card))} />
		</CardWrapp>
	));

	return (
		<Drawer
			anchor="right"
			open={isShoppingBag}
			onClose={() => closeShoppingBag()}
		>
			<Wrappper>
				<Header>
					<span>Кошик</span>
					<Link to="api/favorite">
						<FavouriteWrapp onClick={() => closeShoppingBag()}>
							<FavouriteIcon />
							<span>{favouriteCount.length}</span>
						</FavouriteWrapp>
					</Link>
				</Header>
				<Cards>
					{cards.length > 0 ? (
						<>
							{renderCards}

							<FooterContent>
								<TotalPrice>
									Всього : <br /> <span>{totalPrice} грн.</span>
								</TotalPrice>
								<ButtonShoppingBag
									onClick={() => closeShoppingBag()}
									to="/api/basket"
								>
									Кошик
								</ButtonShoppingBag>
							</FooterContent>
						</>
					) : (
						<IconText>
							<BiCartAlt fontSize={150} />
							<Text>Ваш кошик порожній</Text>
						</IconText>
					)}
				</Cards>
			</Wrappper>
		</Drawer>
	);
};

export default ShoppingBag;
