import { EditInner, EditWrapper, RoutersWrapper } from "./StyledEdit";
import Sidebar from "./components/Sidebar";
import EditorRoutes from "./router";

const Edit = () => {
	return (
		<EditWrapper>
			<EditInner>
				<Sidebar />
				<RoutersWrapper>
					<EditorRoutes />
				</RoutersWrapper>
			</EditInner>
		</EditWrapper>
	);
};

export default Edit;
