import ListEmployee from "../pages/ListEmployee";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store.js";
import "@testing-library/jest-dom";

describe("Testing ListEmployee component", () => {
	beforeEach(() =>
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ListEmployee />
				</BrowserRouter>
			</Provider>
		)
	);
	test("Should render component", () => {
		const title = screen.getAllByText("List Employee");
		expect(title).toBeTruthy();

		const subtitle = document.querySelector("h2");
		expect(subtitle).toHaveTextContent("Current Employees");
	});
});
