import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import CartItem from "./CartItem";
import Button from "../../components/Button";
import ModalSubmit from "../../components/Modal/ModalSubmit";
import { useSelector, useDispatch } from "react-redux";
import {
	decreaseBasket,
	modalOpen,
	modalClose,
	formOpen,
	formClose,
} from "../../reducers";
import { BiCartAlt } from "react-icons/bi";
import {
	basketSelector,
	isModalPageFormSelector,
	isModalSelector,
} from "../../selectors";
import {
	Container,
	Header,
	ButtonSubmit,
	BasketItems,
	HeaderInfo,
} from "./StyledShoppingCart";
import { ICard } from "../../types/data";
import { useUserData } from "../../hooks/useUserData";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
	const navigate = useNavigate();

	const [cardItem, setCardItem] = useState<ICard | null>(null);
	const [totalPrice, setTotalPrice] = useState(0);

	const dispatch = useDispatch();

	const cards: ICard[] = useSelector(basketSelector);
	const modal: boolean = useSelector(isModalSelector);
	const formPage: boolean = useSelector(isModalPageFormSelector);

	const user = useUserData();

	const renderCard = cards.map((card: ICard) => (
		<CartItem
			key={card.article}
			cardProps={card}
			isOpenModal={() => dispatch(modalOpen())}
			onСlick={() => setCardItem(card)}
		/>
	));

	useEffect(() => {
		setTotalPrice(
			cards.reduce(
				(accum: number, item: { price: number; count: number }) =>
					accum + item.price * item.count,
				0
			)
		);
	}, [cards]);

	const handleOrderButtonClick = () => {
		if (user) {
			navigate("/api/order-form");
		} else {
			dispatch(formOpen());
		}
	};

	const handlerRegister = () => {
		navigate("/api/registration");
		dispatch(dispatch(formClose()));
	};

	return (
		<Container>
			<Header>
				<h1>Кошик</h1>

				<HeaderInfo>
					<div className="total__price">
						<span>Загальна сума: {totalPrice} грн.</span>
					</div>

					{cards.length > 0 ? (
						<ButtonSubmit>
							<Button
								children="Оформити замовлення"
								className="basket__button-elem"
								onClick={handleOrderButtonClick}
							/>
						</ButtonSubmit>
					) : null}
				</HeaderInfo>
			</Header>

			<BasketItems>
				{cards.length < 1 ? (
					<div className="empty-basket">
						<BiCartAlt fontSize={180} />
					</div>
				) : null}

				{renderCard}
			</BasketItems>

			{modal && (
				<Modal
					header="Підтвердіть видалення"
					text={`Ви впевнені що хочете видалити ${cardItem?.title} з кошика?`}
					closeModal={() => dispatch(modalClose())}
					onClick={() => dispatch(decreaseBasket(cardItem))}
				/>
			)}

			{formPage && (
				<ModalSubmit
					text="Створіть обліковий запис, або зареєструйтесь будь ласка"
					onClick={handlerRegister}
				/>
			)}
		</Container>
	);
};

export default ShoppingCart;
