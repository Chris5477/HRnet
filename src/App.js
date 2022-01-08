import "./App.css";
import CreateEmployee from "./pages/CreateEmployee";
import ListEmployee from "./pages/ListEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<CreateEmployee />} />
						<Route path="/employee-list" element={<ListEmployee />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
};

export default App;
