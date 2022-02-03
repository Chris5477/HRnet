import LineEmployee from "../components/LineEmployee";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockEmployee } from "../utils/__mock_employee.js";

describe("Testing LineEmployee component", () => {
	test("Should render component", () => {
		render(<LineEmployee data={mockEmployee[0]} />);
		const name = screen.getAllByText("Isabel");
		expect(name).toBeTruthy();
	});
});
