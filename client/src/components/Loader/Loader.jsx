import { Box } from "@mui/material";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				marginTop: "-160px",
			}}
		>
			<RingLoader color="rgb(255, 215, 0)" size={80} />
		</Box>
	);
};

export default Loader;
