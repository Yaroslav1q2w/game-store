import { Link } from "react-router-dom";
import {
	Wrapper,
	ItemDetails,
	Header,
	Description,
	PriceItem,
	HeaderWrapp,
	IconIncrease,
	IconDecrease,
	CounterWrap,
	CloseItem,
} from "./StyledBaasketCard";
import { useDispatch } from "react-redux";
import { ICard } from "../../../types/data";
import { addCount, removeBasket } from "../../../reducers";

interface BasketCardProps {
	cardProps: ICard;
	isOpenModal: () => void;
	onСlick: () => void;
}

const CartItem: React.FC<BasketCardProps> = ({
	cardProps,
	isOpenModal,
	onСlick,
}) => {
	const { title, article, price, image, genre, count, _id } = cardProps;

	const dispatch = useDispatch();

	return (
		<Wrapper>
			<img src={image} alt={title} width={320} height={180} />
			<ItemDetails>
				<HeaderWrapp>
					<Header>
						<Link to={`/api/products/${_id}`}>
							<h3 className="basket__item-title">{title}</h3>
						</Link>

						<span className="basket__item-article">Артикул: {article}</span>
					</Header>
					<PriceItem>{count * price} грн.</PriceItem>
				</HeaderWrapp>
				<Description>
					<div>
						<span className="item-developer">{genre}</span>
					</div>
					<CounterWrap>
						<IconDecrease
							fontSize={32}
							onClick={() => dispatch(removeBasket(cardProps))}
						/>
						<p className="count">{count}</p>
						<IconIncrease
							fontSize={32}
							onClick={() => dispatch(addCount(cardProps))}
						/>
					</CounterWrap>
					<div className="item__remove">
						<CloseItem
							onClick={() => {
								isOpenModal();
								onСlick();
							}}
						/>
					</div>
				</Description>
			</ItemDetails>
		</Wrapper>
	);
};

export default CartItem;
