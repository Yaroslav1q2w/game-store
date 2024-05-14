import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import Modal from "../Modal";
import CardsSceleton from "../CardsSceleton";
import MenuCategory from "../MenuCategory";
import Pagination from "../Pagination";
import { useSelector, useDispatch } from "react-redux";

import {
	increaseBasket,
	modalOpen,
	modalClose,
	actionFetchCards,
} from "../../reducers";
import {
	cardsSelector,
	categorySelector,
	isLoadingSelector,
	isModalSelector,
	pageCountSelector,
	currentLimitSelector,
} from "../../selectors";
import { Container, SectionGames, HeaderNavigation } from "./StyledCards";
import SearchComponent from "../SearchComponent";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader";

const Cards = () => {
	const [selectedProduct, setSelectedProduct] = useState([]);
	const dispatch = useDispatch();
	const cards = useSelector(cardsSelector);
	const modal = useSelector(isModalSelector);
	const isLoading = useSelector(isLoadingSelector);
	const categoryID = useSelector(categorySelector);
	const pageCount = useSelector(pageCountSelector);
	const limitCount = useSelector(currentLimitSelector);

	const [searchParams] = useSearchParams();
	const initialSearchQuery = searchParams.get("search") || "";

	const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

	useEffect(() => {
		dispatch(
			actionFetchCards({
				category: categoryID > 0 ? categoryID : null,
				limit: limitCount,
				page: pageCount,
				search: searchQuery,
			})
		);

		window.scrollTo(0, 0);
	}, [dispatch, categoryID, limitCount, pageCount, searchQuery]);

	return (
		<Container>
			<HeaderNavigation>
				<MenuCategory />
				<SearchComponent onSearch={setSearchQuery} />
			</HeaderNavigation>

			{isLoading ? (
				<Loader />
			) : (
				<SectionGames>
					{cards.map((card) => (
						<GameCard
							cardProps={card}
							isOpenModal={() => dispatch(modalOpen())}
							key={card.article}
							addToCard={() => setSelectedProduct(card)}
						/>
					))}
				</SectionGames>
			)}

			<Pagination />
			{modal && (
				<Modal
					header="Підтвердіть додавання"
					text={`Додати ${selectedProduct.title} до кошика?`}
					closeModal={() => dispatch(modalClose())}
					onClick={() => dispatch(increaseBasket(selectedProduct))}
				/>
			)}
		</Container>
	);
};

export default Cards;
