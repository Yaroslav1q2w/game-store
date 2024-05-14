import FavoriteCard from "./FavouriteCard";
import { useSelector } from "react-redux";
import { FaStarHalfAlt } from "react-icons/fa";
import { favouriteSelector } from "../../selectors";
import { Container, TitleFavourite, FavoriteItems } from "./StyledFavourite";
import { ICard } from "../../types/data";

const Favourite: React.FC = () => {
	const cardsFavorite: ICard[] = useSelector(favouriteSelector);

	const renderCard = cardsFavorite.map((card) => (
		<FavoriteCard key={card.article + 1} cardProps={card} />
	));

	return (
		<Container>
			<TitleFavourite>Вибране</TitleFavourite>

			{cardsFavorite.length < 1 ? (
				<div className="empty-favorite">
					<FaStarHalfAlt fontSize={130} />
				</div>
			) : null}

			<FavoriteItems>{renderCard}</FavoriteItems>
		</Container>
	);
};

export default Favourite;
