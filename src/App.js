import "./App.css";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployee from "./pages/ListEmployee";

const App = () => {
	return (
		<div className="App">
			<CreateEmployee />
			<ListEmployee />
		</div>
	);
};

export default App;
