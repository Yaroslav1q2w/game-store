import { useDispatch } from "react-redux";
import { decreaseFavorite } from "../../../reducers";
import { Link } from "react-router-dom";
import {
	Wrapper,
	ItemDetails,
	Header,
	Description,
	StarIcon,
} from "./StyledFavoriteCard";
import { ICard } from "../../../types/data";

interface FavoriteCardProps {
	cardProps: ICard;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ cardProps }) => {
	const { title, article, price, image, genre, _id } = cardProps;

	const dispatch = useDispatch();

	return (
		<Wrapper>
			<img src={image} alt={title} />

			<ItemDetails>
				<Header>
					<Link to={`/api/products/${_id}`}>
						<h3 className="favorite__item-title">{title}</h3>
					</Link>
					<span className="favorite__item-article">Артикул: {article}</span>
					<span className="favorite__item-genre">{genre}</span>
				</Header>
				<Description>
					<p className="favorite__item-price">{price} грн.</p>
					<div className="close-card">
						<StarIcon onClick={() => dispatch(decreaseFavorite(cardProps))} />
					</div>
				</Description>
			</ItemDetails>
		</Wrapper>
	);
};

export default FavoriteCard;
