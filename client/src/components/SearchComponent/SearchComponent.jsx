import { useEffect } from "react";
import { Form, Input } from "./StyledSearchComponent.";
import { useSearchParams } from "react-router-dom";

const SearchComponent = ({ onSearch }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get("search") || "";

	const handleSearchChange = (event) => {
		const value = event.target.value.trim();
		const newSearchParams = new URLSearchParams();

		if (value) {
			newSearchParams.set("search", value);
		}

		for (const [key, val] of searchParams.entries()) {
			if (key !== "search") {
				newSearchParams.set(key, val);
			}
		}

		setSearchParams(newSearchParams, { replace: true });
	};

	useEffect(() => {
		onSearch(searchTerm);
	}, [searchTerm, onSearch]);

	return (
		<Form>
			<Input
				type="text"
				value={searchTerm}
				onChange={handleSearchChange}
				placeholder="Пошук..."
			/>
		</Form>
	);
};
export default SearchComponent;
