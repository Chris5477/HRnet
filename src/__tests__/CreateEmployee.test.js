import CreateEmployee from "../pages/CreateEmployee";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Testing CreateEmployee component", () => {
	beforeEach(() =>
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CreateEmployee />
				</BrowserRouter>
			</Provider>
		)
	);
	test("Should render components", () => {
		const title = screen.getAllByText("Create Employee");
		const btn = document.querySelector("button");

		expect(title).toBeTruthy();
		expect(btn).toHaveTextContent("Create");
	});

	test("Should call errorValidation function", () => {
		const inputs = [...document.querySelectorAll("input")];
		inputs.push(document.querySelector("select"));
		const btn = document.querySelector("button");
		fireEvent.click(btn);
		const errorMessage = screen.getAllByText("Veuillez remplir tous les champs du formulaire !");
		expect(errorMessage).toBeTruthy();
	});

	test("Should call successValidation function", () => {
		const inputs = [...document.querySelectorAll("input")];
		inputs.push(document.querySelector("select"));

		(inputs[0].value = "nameUser"),
			(inputs[1].value = "lastNameUser"),
			(inputs[2].value = "18/12/1990"),
			(inputs[3].value = "01/01/1970"),
			(inputs[8].select = "jobUser"),
			(inputs[5].value = "streetUser"),
			(inputs[6].value = "cityUser"),
			(inputs[7].value = "stateUser"),
			(inputs[4].value = "codeUser");

		const btn = screen.getByText("Create");
		fireEvent.click(btn);
		const modal = document.querySelector(".modal");
		expect(modal).toBeInTheDocument();
	});
});
