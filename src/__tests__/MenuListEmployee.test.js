import MenuListEmployee from "../components/MenuListEmployee";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { store } from "../redux/store.js";
import thunk from "redux-thunk";
import { mockEmployee } from "../utils/__mock_employee";

const mockStore = configureMockStore([thunk]);

describe("Testing MenuListEmployee component", () => {
	beforeEach(() =>
		render(
			<Provider store={store}>
				<MenuListEmployee />
			</Provider>
		)
	);
	test("Should render component", () => {
		const element = document.querySelector(".menu-list-employee");
		expect(element).toBeDefined();
	});

	test("Should set a maximum research", () => {
		const select = document.querySelector("select");
		fireEvent.change(select, { target: { value: 25 } });
		const maxEmployee = store.getState().maxEmployee;
		expect(maxEmployee).toBe("25");
	});

	test("Should filter listEmployee", () => {
		const store = mockStore({ filteredEmployee: mockEmployee });
		const input = document.querySelector("input");
		fireEvent.change(input, { target: { value: "!" } });
		const td = document.querySelector("td");
		expect(td).not.toBeInTheDocument();
	});
});
