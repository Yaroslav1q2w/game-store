import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionFetchAllCustomers } from "../../../../reducers";

import { Container, Title, Table, Th, Td } from "./StyledEditUsers";
import { registerAllCustomers } from "../../../../selectors";

const EditUsers = () => {
	const dispatch = useDispatch();
	const customers = useSelector(registerAllCustomers);
	console.log(customers);

	useEffect(() => {
		dispatch(actionFetchAllCustomers());
	}, []);

	return (
		<Container>
			<Title>Користувачі</Title>
			<Table>
				<thead>
					<tr>
						<Th>Ім'я</Th>
						<Th>Прізвище</Th>
						<Th>Login</Th>
						<Th>Email</Th>
						<Th>Адміністратор</Th>
						<Th>Дата створення</Th>
						{/* Додайте інші заголовки за потребою */}
					</tr>
				</thead>
				<tbody>
					{customers?.map((customer) => (
						<tr key={customer._id}>
							<Td>{customer.firstName}</Td>
							<Td>{customer.lastName}</Td>
							<Td>{customer.login}</Td>
							<Td>{customer.email}</Td>
							<Td>{customer.isAdmin ? "Так" : "Ні"}</Td>
							<Td>{new Date(customer.created_at).toLocaleString()}</Td>
							{/* Додайте інші комірки за потребою */}
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default EditUsers;
