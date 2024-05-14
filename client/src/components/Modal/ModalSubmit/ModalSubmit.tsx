import Button from "../../Button";
import {
	ModalContainer,
	ModalWrapp,
	ButtonContainer,
} from "./StyledmodalSubmit";

interface ModalSubmitProps {
	onClick: () => void;
	text: string;
}

const ModalSubmit = ({ text, onClick }: ModalSubmitProps) => {
	return (
		<ModalContainer>
			<ModalWrapp
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
			>
				<div className="modal__submit-content">
					<hr />
					{text}
				</div>
				<ButtonContainer>
					<Button
						className="button__submit_form"
						children="Ok"
						onClick={() => {
							onClick();
						}}
					/>
				</ButtonContainer>
			</ModalWrapp>
		</ModalContainer>
	);
};

export default ModalSubmit;
