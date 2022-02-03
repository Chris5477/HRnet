import { render } from "@testing-library/react";
import Fieldset from "../components/Fieldset";
import { arrayInputsIdentity } from "../utils/Listing-inputs";
import "@testing-library/jest-dom";

describe("Testing Fieldset component", () => {
	beforeEach(() => render(<Fieldset wrapperClass={"test-class"} legend={"Department"} array={arrayInputsIdentity} />));

	test("Shoul render Component", () => {
		const fieldset = document.querySelector("fieldset");
		expect(fieldset).toBeInTheDocument();
	});

	test("Should have a className", () => {
		const fieldset = document.querySelector("fieldset").className;
		expect(fieldset).toBe("test-class");
	});

	test("Should render a legend", () => {
		const legend = document.querySelector("legend");
		expect(legend).toHaveTextContent("Department");
	});
});
