import { render } from "@testing-library/react";
import Button from "../components/Button";
import "@testing-library/jest-dom";

beforeEach(() => render(<Button nameClass={"btn-test"} method={() => null} text={"Create"} />));

describe("Testing Button component", () => {
	test("Should render component", () => {
		const btn = document.querySelector("button");
		expect(btn).toBeInTheDocument();
	});

	test("Should have className", () => {
		const btn = document.querySelector("button");
		const classBtn = btn.className;
		expect(classBtn).toBe("btn-test");
	});

	test("Should have content text", () => {
		const btn = document.querySelector("button");
		expect(btn).toHaveTextContent("Create");
	});
});
