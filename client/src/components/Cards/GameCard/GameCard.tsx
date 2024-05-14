import { useState } from "react";
import Button from "../../Button";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increaseFavorite, decreaseFavorite } from "../../../reducers";
import { Link } from "react-router-dom";
import {
	Wrapper,
	ImageItem,
	GameBack,
	GameBackWrapp,
	Details,
	HeaderGame,
	Article,
	Genre,
	Description,
} from "./StyledGameCard";
import { ICard } from "../../../types/data";

export interface GameProps extends ICard {
	cardProps: ICard;
	isOpenModal: () => void;
	addToCard: () => void;
}

const GameCard: React.FC<GameProps> = ({
	cardProps,
	isOpenModal,
	addToCard,
}) => {
	const { title, article, price, image, description, genre, _id } = cardProps;

	const favoritesLocalStorage = JSON.parse(
		localStorage.getItem("favoriteCount") ?? "[]"
	);
	const isFavorite = Boolean(
		favoritesLocalStorage?.find(
			(favorite: ICard) => favorite.article === article
		)
	);

	const [addFavorites, setAddFavorites] = useState<boolean>(
		!isFavorite ? false : true
	);
	const [notFavorites, setNotFavorites] = useState<boolean>(
		isFavorite ? false : true
	);

	const dispatch = useDispatch();

	return (
		<Wrapper>
			<Link to={`api/products/${_id}`}>
				<ImageItem>
					<img
						src={image}
						alt={title}
						width={320}
						height={180}
						loading="lazy"
					/>
					<GameBack>
						<GameBackWrapp>
							<h2 className="game__back-title">{title}</h2>
							<p className="game__back-desc">{description}</p>
							<div className="game__back-link"></div>
						</GameBackWrapp>
					</GameBack>
				</ImageItem>
			</Link>
			<Details>
				<div className="game__title-wrapp">
					<HeaderGame>
						<Link to={`api/products/${_id}`}>
							<h3 className="title">{title}</h3>
						</Link>
						<div className="star-icon">
							{notFavorites && (
								<AiOutlineStar
									fontSize={26}
									onClick={() => {
										dispatch(increaseFavorite(cardProps));
										setAddFavorites(true);
										setNotFavorites(false);
									}}
								/>
							)}
							{addFavorites && (
								<AiFillStar
									fontSize={26}
									onClick={() => {
										dispatch(decreaseFavorite(cardProps));
										setNotFavorites(true);
										setAddFavorites(false);
									}}
								/>
							)}
						</div>
					</HeaderGame>
					<Article>Артикул: {article}</Article>
				</div>
				<div>
					<Genre>{genre}</Genre>
				</div>
				<Description>
					<p className="game__item-price">{price} грн.</p>
					<Button
						type="button"
						children="В кошик"
						className="button"
						onClick={() => {
							isOpenModal();
							addToCard();
						}}
					/>
				</Description>
			</Details>
		</Wrapper>
	);
};

export default GameCard;
