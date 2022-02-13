import CreateEmployee from "../pages/CreateEmployee";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
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
		const select = document.querySelector("select");
		const btn = document.querySelector("button");
		fireEvent.click(btn);
		const errorMessage = screen.getAllByText("Veuillez remplir tous les champs du formulaire !");
		expect(errorMessage).toBeTruthy();
		expect(inputs[8].value).toBe("");
	});

	test("Should call successValidation function", () => {
		const inputs = [...document.querySelectorAll("input")];
		const select = document.querySelector("select");
		const option = document.querySelector("select option:nth-child(2)");
		inputs.push(select);
		inputs.forEach((el) => (el.value = "ok"));
		userEvent.selectOptions(select, option, { value: "sales" });
		const btn = screen.getByText("Create");
		fireEvent.click(btn);
		const modal = document.querySelector(".modal");
		expect(modal).toBeInTheDocument();
	});

	test("Should show the date choose", () => {
		const birthdayInput = document.getElementById("birthday");
		fireEvent.focus(birthdayInput);
		const calendar = document.querySelector(".calendar");
		expect(calendar).toBeInTheDocument();
		const btnsDays = [...document.querySelectorAll(".day-of-month")];
		fireEvent.click(btnsDays[12]);
		expect(birthdayInput.value).toBe("2022/02/12");
		expect(birthdayInput.value).not.toBe("2022/02/02");
	});

	test("Should be displayed with a zero if the date is less than 10", () => {
		const birthdayInput = document.getElementById("birthday");
		fireEvent.focus(birthdayInput);
		const calendar = document.querySelector(".calendar");
		expect(calendar).toBeInTheDocument();
		const btnsDays = [...document.querySelectorAll(".day-of-month")];
		fireEvent.click(btnsDays[4]);
		expect(birthdayInput.value).toBe("2022/02/04");
		expect(birthdayInput.value).not.toBe("2022/02/4");
	});
});
