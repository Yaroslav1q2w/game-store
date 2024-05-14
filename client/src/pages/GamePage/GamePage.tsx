import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isModalSelector } from "../../selectors";
import { increaseBasket, modalClose, modalOpen } from "../../reducers";
import Loader from "../../components/Loader";

import {
	Container,
	ContainerWrapp,
	MainWrapp,
	HeaderPoster,
	HeaderContent,
	PageDescription,
	FooterButton,
} from "./StyledGamePage";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { sendRequest } from "../../helpers/sendRequest";
import { API_URL } from "../../configs/API";
import { ICard } from "../../types/data";
import RightArrowSvg from "./images/RightArrowSvg";

const GamePage: React.FC = () => {
	const [selectedProduct, setSelectedProduct] = useState<ICard | null>(null);
	const [game, setGame] = useState<ICard | null>(null);
	const [loader, setLoader] = useState<boolean>(true);

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const { card_id } = useParams<{ card_id: string }>();
	const dispatch = useDispatch();
	const modal = useSelector(isModalSelector);

	useEffect(() => {
		sendRequest(`${API_URL}/api/products/${card_id}`).then((data) => {
			setGame(data);
			setLoader(false);
		});

		window.scrollTo(0, 0);
	}, [card_id]);

	if (loader) {
		return <Loader />;
	}

	return (
		<Container>
			<div
				className="page__game-img"
				style={{ backgroundImage: `url(${game?.image})` }}
			/>
			<ContainerWrapp>
				<MainWrapp>
					<div className="main__wrap-header">
						<Link to="#" className="btn-back" onClick={goBack}>
							<RightArrowSvg />
						</Link>
						<HeaderPoster>
							<img src={game?.image} alt={game?.title} />
						</HeaderPoster>
						<HeaderContent>
							<h3 className="game__page-title">{game?.title}</h3>
							<h4 className="game__page-subname">{game?.title}</h4>
							<p className="game__page-info">
								Жанр:<span className="colored">{game?.genre}</span>
							</p>
							<p className="game__page-info">
								Дата випуску:
								<span className="colored">{game?.data}</span>
							</p>
							<p className="game__page-info">
								Розробник:
								<span className="colored">{game?.developer}</span>
							</p>
							<p className="game__page-info">
								Платформи:
								<span className="colored">{game?.platforms}</span>
							</p>
							<p className="game__page-info">
								Мови інтерфейсу:
								<span className="colored">{game?.language}</span>
							</p>
						</HeaderContent>
					</div>
					<PageDescription>{game?.the_plot}</PageDescription>
				</MainWrapp>

				<FooterButton>
					<Button
						children="Додати до кошику"
						className="footer__button-elem"
						onClick={() => {
							dispatch(modalOpen());
							setSelectedProduct(game);
						}}
					/>
				</FooterButton>
			</ContainerWrapp>

			{modal && selectedProduct && (
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

export default GamePage;
