import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Testing Header component", () => {
	beforeEach(() =>
		render(
			<BrowserRouter>
				<Header link={"/"} text={"texte"} title={"Create Employee"} />;
			</BrowserRouter>
		)
	);

	test("Should render Header component", () => {
		const header = document.querySelector("header");
		expect(header).toBeInTheDocument();
	});

	test("Should have a title with as value Create Employee", () => {
		const title = document.querySelector("h1");
		expect(title).toHaveTextContent("Create Employee");
	});
});
