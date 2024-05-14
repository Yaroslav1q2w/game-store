import { useDispatch, useSelector } from "react-redux";
import { setPageCount } from "../../reducers";
import { isTotalCount, pageCountSelector } from "../../selectors";

import { PagesList, PagesListItem, PagesWrap } from "./StyledPagination";

const Pagination = () => {
	const dispatch = useDispatch();
	const pageCount = useSelector(pageCountSelector);
	const totalCount = useSelector(isTotalCount);

	const pages = [];
	for (let i = 0; i < totalCount; i++) {
		pages.push(i + 1);
	}

	return (
		<PagesWrap>
			<PagesList>
				{pages.map((item, index) => (
					<PagesListItem
						className={pageCount === item ? "active" : ""}
						onClick={() => dispatch(setPageCount(item))}
						key={index}
					>
						{item}
					</PagesListItem>
				))}
			</PagesList>
		</PagesWrap>
	);
};

export default Pagination;
