interface Props {
	enableBackground?: string | (number & {}) | undefined;
}

const RightArrowSvg: React.FC<Props> = ({ enableBackground }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 330 180"
			style={{ enableBackground: "new 0 0 330 180" } as React.CSSProperties}
			xmlSpace="preserve"
		>
			<path d="m325.6 79.4-75-75c-5.9-5.9-15.4-5.9-21.2 0-5.9 5.9-5.9 15.4 0 21.2L278.8 75H15C6.7 75 0 81.7 0 90s6.7 15 15 15h263.8l-49.4 49.4c-5.9 5.9-5.9 15.4 0 21.2 2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4l75-75c5.9-5.9 5.9-15.3 0-21.2z" />
		</svg>
	);
};

export default RightArrowSvg;
