import App from "../App";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import "@testing-library/jest-dom";

describe("Testing App component", () => {
	test("Should render App component", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});
});
