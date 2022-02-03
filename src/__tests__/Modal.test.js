import Modal from "../components/Modal";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing Modal components", () => {
	test("Should render component", () => {
		const mockClose = jest.fn(true);
		render(<Modal props={mockClose}></Modal>);
		const text = screen.getAllByText("Employee Created");
		expect(text).toBeTruthy();
	});

	test("Should close modal", () => {
		const mockClose = jest.fn().mockReturnValue(false);
		render(<Modal props={mockClose}></Modal>);
		const btn = document.querySelector(".round-btn");
		fireEvent.click(btn);
		const content = document.querySelector(".modal");
		expect(content).toBeNull();
	});
});
