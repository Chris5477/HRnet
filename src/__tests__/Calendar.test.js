import Calendar from "../components/Calendar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Testing Calendar Component", () => {
	beforeEach(() => render(<Calendar setter={() => null} />));

	test("Should show previous month", () => {
		const currentMonth = screen.getAllByText("February");
		expect(currentMonth).toBeTruthy();
		const previousMonthBtn = document.querySelector(".previous-month");
		fireEvent.click(previousMonthBtn);
		const actualMonth = screen.getAllByText("January");
		expect(actualMonth).toBeTruthy();
		fireEvent.click(previousMonthBtn);
		const previousYear = screen.getAllByText("December");
		expect(previousYear).toBeTruthy();
	});

	test("Should show next month", () => {
		const currentMonth = screen.getAllByText("February");
		expect(currentMonth).toBeTruthy();
		const nextMonthBtn = document.querySelector(".next-month");
		fireEvent.click(nextMonthBtn);
		const actualMonth = screen.getAllByText("March");
		expect(actualMonth).toBeTruthy();
		for (let i = 0; i < 10; i++) {
			fireEvent.click(nextMonthBtn);
		}
		const nextYear = screen.getAllByText("January");
		expect(nextYear).toBeTruthy();
	});

	test("Should show a list of month", () => {
		const currentMonth = document.querySelector(".actualMonth");
		fireEvent.click(currentMonth);
		const january = screen.getByText("January");
		const december = screen.getByText("December");
		expect(january).toBeTruthy();
		expect(december).toBeTruthy();
		const januaryBtn = document.querySelector(".select-month");
		fireEvent.click(januaryBtn);
		expect(january).not.toBeVisible();
	});

	test("Should show a list of years", () => {
		const currentYear = document.querySelector(".actualYear");
		fireEvent.click(currentYear);
		const olderYear = screen.getByText("2013");
		const moreDistantYear = document.querySelector(".select-year").textContent;
		expect(olderYear).toBeTruthy();
		expect(moreDistantYear).toBeTruthy();
		const yearBtn = document.querySelector(".select-year");
		fireEvent.click(yearBtn);
		expect(yearBtn).not.toBeVisible();
	});

	test("Should allows to navigate through previous years", () => {
		const currentYear = document.querySelector(".actualYear");
		fireEvent.click(currentYear);
		const leftArrow = document.querySelector(".nav-year");
		fireEvent.click(leftArrow);
		const olderYear = screen.getAllByText("2003");
		expect(olderYear).toBeTruthy();
	});

	test("Should allows to navigate through next years", () => {
		const currentYear = document.querySelector(".actualYear");
		fireEvent.click(currentYear);
		const rightArrow = document.querySelector(".nav-year:last-child");
		fireEvent.click(rightArrow);
		const moreDistantyear = screen.getAllByText("2032");
		expect(moreDistantyear).toBeTruthy();
	});
});
