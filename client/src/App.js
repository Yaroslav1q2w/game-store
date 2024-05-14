import Header from "./components/Header";
import "./App.scss";
import RootRouter from "./routers";

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main__content">
				<RootRouter />
			</main>
		</div>
	);
};

export default App;
