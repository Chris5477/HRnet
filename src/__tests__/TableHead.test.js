import TableHead from "../components/TableHead";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing Tablehead components", () => {
	test("Should render components", () => {
		render(<TableHead method={() => null} value={"firstName"} />);
		const propriety = screen.getAllByText("firstName");
		expect(propriety).toBeTruthy();
	});
});
