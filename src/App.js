import "./App.css";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployee from "./pages/ListEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<CreateEmployee />} />
					<Route path="/employee-list" element={<ListEmployee />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
