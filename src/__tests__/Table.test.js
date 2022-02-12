import Table from "../components/Table";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "@testing-library/jest-dom";
import { mockEmployee } from "../utils/__mock_employee";

describe("Testing Table component", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Table />
			</Provider>
		);
		mockEmployee.forEach((el) => store.getState().filteredEmployee.push(el));
	});

	test("Should render component", () => {
		const table = document.querySelector("table");
		expect(table).toBeInTheDocument();
	});

	test("Should return a firstName of an employee list", () => {
		const firstName = screen.getAllByText("Mai");
		expect(firstName).toBeTruthy();
	});

	test("Should change classs attribute", () => {
		const span = document.querySelector(".pagination span");
		fireEvent.click(span);
		expect(span).toHaveClass("activeSpan");
	});

	test("Should sort data", () => {
		const contentStore = store.getState().filteredEmployee;
		const valueArray = contentStore[0].firstName;
		const span = document.querySelector(".value-thead");
		fireEvent.click(span);
		expect(store.getState().filteredEmployee[0].firstName).not.toEqual(valueArray);
		fireEvent.click(span);
		expect(store.getState().filteredEmployee[0].firstName).not.toEqual(valueArray);
	});
});
