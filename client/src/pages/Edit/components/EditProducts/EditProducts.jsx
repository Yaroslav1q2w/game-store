import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validationProductSchema } from "./validation";

import {
	Container,
	Title,
	ButtonProduct,
	Table,
	Th,
	Td,
	ModalWrapper,
	FormWrapper,
	ModalContent,
	StyledButton,
	StyledLabel,
	IconClose,
} from "./StyledEditProducts";
import { allcCardsSelector } from "../../../../selectors";
import {
	actionCreateProduct,
	actionFetchAllProducts,
} from "../../../../reducers";
import { Formik, Form } from "formik";
import Input from "../../../../components/OrderForm/components/Input";
import ModalSubmit from "../../../../components/Modal/ModalSubmit";

const EditProducts = () => {
	const [newProduct, setNewProduct] = useState({});

	const dispatch = useDispatch();
	const cards = useSelector(allcCardsSelector);
	const [isModalOpen, setModalOpen] = useState(false);
	const [modalFinish, setModalFinish] = useState(false);

	const modalForm = () => {
		setModalOpen(!isModalOpen);
	};

	const saveProduct = (formData) => {
		setNewProduct(formData);
		dispatch(actionCreateProduct(formData));
		setModalFinish(!modalFinish);
	};

	const handlerFinish = () => {
		window.location.reload();
		setModalFinish(!modalFinish);
	};

	useEffect(() => {
		dispatch(actionFetchAllProducts());
	}, [dispatch]);

	return (
		<Container>
			<Title>Продукти</Title>
			<ButtonProduct onClick={modalForm}>Додати товар</ButtonProduct>
			<Table>
				<thead>
					<tr>
						<Th>Назва</Th>
						<Th>Розробник</Th>
						<Th>Жанр</Th>
						<Th>Категорія</Th>
						<Th>Ціна</Th>
						{/* Додайте інші заголовки за потребою */}
					</tr>
				</thead>
				<tbody>
					{cards?.map((card) => (
						<tr key={card._id}>
							<Td>{card.title}</Td>
							<Td>{card.developer}</Td>
							<Td>{card.genre}</Td>
							<Td>{card.category}</Td>
							<Td>{card.price}</Td>
							{/* Додайте інші комірки за потребою */}
						</tr>
					))}
				</tbody>
			</Table>
			{isModalOpen && (
				<ModalWrapper onClick={modalForm}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<Formik
							initialValues={{
								image: "",
								title: "",
								price: "",
								article: "",
								developer: "",
								description: "",
								genre: "",
								language: "",
								the_plot: "",
								data: "",
								platforms: "",
								category: "",
							}}
							validationSchema={validationProductSchema}
							onSubmit={(values) => {
								saveProduct(values);
								modalForm();
							}}
						>
							<Form>
								<FormWrapper>
									<IconClose onClick={modalForm} />
									<StyledLabel>
										<Input
											className="input__elem"
											name="image"
											placeholder="Вставте посилання на зображення"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="title"
											placeholder="Введіть назву товару"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="price"
											placeholder="Введіть ціну"
											type="number"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="article"
											placeholder="Введіть артикул"
											type="number"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="developer"
											placeholder="Введіть розробника"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="description"
											placeholder="Введіть короткий опис"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="genre"
											placeholder="Введіть жанр"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="language"
											placeholder="Введіть мови"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="the_plot"
											placeholder="Введіть повний опис"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="data"
											placeholder="Введіть дату вихода"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="platforms"
											placeholder="Введіть платформи"
											type="text"
										/>
									</StyledLabel>
									<StyledLabel>
										<Input
											className="input__elem"
											name="category"
											placeholder="Введіть категорію"
											type="number"
										/>
									</StyledLabel>
									<StyledButton type="submit">Додати товар</StyledButton>
								</FormWrapper>
							</Form>
						</Formik>
					</ModalContent>
				</ModalWrapper>
			)}
			{modalFinish && (
				<ModalSubmit
					text={`Гра ${newProduct.title} була успішно додана`}
					onClick={handlerFinish}
				/>
			)}
		</Container>
	);
};

export default EditProducts;
