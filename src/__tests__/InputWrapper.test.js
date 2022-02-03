import InputWrapper from "../components/InputWrapper";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing component InputWrapper", () => {
	test("Should render component", () => {
		render(<InputWrapper label={"birthday"} text={"text"} method={() => null} />);
		const input = document.querySelector("input");
		expect(input).toBeInTheDocument();
	});

	test("Should show a calendar during focus of birthday 's input", () => {
		render(<InputWrapper label={"birthday"} text={"text"} method={() => null} />);
		const input = document.querySelector("input");
		fireEvent.focus(input);
		const content = screen.getAllByText("February 2022");
		expect(content).toBeTruthy();
		const btn = [...document.querySelectorAll("button")];
		fireEvent.click(btn[25]);
		expect(input.value).not.toBeNull();
	});

	test("Should show a calendar during focus of begin's input", () => {
		render(<InputWrapper label={"begin"} text={"text"} method={() => null} />);
		const input = document.querySelector("input");
		fireEvent.focus(input);
		const content = screen.getAllByText("February 2022");
		expect(content).toBeTruthy();
		const btn = [...document.querySelectorAll("button")];
		fireEvent.click(btn[25]);
		expect(input.value).not.toBeNull();
	});

	test("Should change value when the user eneters something", () => {
		const mockChange = jest.fn().mockReturnValue("e");
		render(<InputWrapper label={"firstName"} text={"text"} method={(e) => mockChange(e)} />);
		const input = document.querySelector("input");
		fireEvent.change(input, { target: { value: "nameUser" } });
		expect(input.value).toBe("nameUser");
	});
});
