interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
	type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
	type,
}) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
