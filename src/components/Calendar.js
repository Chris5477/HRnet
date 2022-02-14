import { useState } from "react";
import CalendarDays from "./CalendarDays";
import SectionCalendar from "./SectionCalendar";
import { months, days, schemaMonths } from "../utils/utils_date";
import { correctPositionDay, selectMonth, selectYear } from "../utils/function.js";
import PropTypes from "prop-types";

/* aLLOWS TO SHOW A CALENDAR */

const Calendar = ({ setter }) => {
	/* GET MONTH AND YEAR ACTUAL */
	const [month, setMonth] = useState(months[new Date().getMonth()]);
	const [year, setYear] = useState(new Date().getFullYear());

	/* SET BOOLEANS TO SHOW MONTH OR YEAR MENU */
	const [visibilityContainerMonth, setVisibilityContainerMonth] = useState(false);
	const [visibilityContainerYear, setVisibilityContainerYear] = useState(false);

	/*SET A FLAG TO INCREMENT OR DECREMENT THE YEARS IN MENU YEAR */
	let [flag, setFlag] = useState(0);

	/* THIS VARIABLE CONTAINS OBJECT MONTH TO SET HOW MANY OF DAYS THERE IS IN THE MONTH */
	const allMonths = schemaMonths(year);

	/* GET VALUE NUMERIC OF MONTH */
	let numericMonth = months.indexOf(month);

	/* LIST FROM CURRENT YEAR TO 10 YEARS BACK */
	const listYear = Array.from({ length: 10 })
		.fill(year)
		.map((currentYear, index) => currentYear - index + flag);

	/* GET THE FIRST OF THE MONTH TO CORRECTLY SET THE LAYING OF DAYS IN THE CALENDAR */
	const firstDay = correctPositionDay(year, numericMonth, days);

	/* ALLOWS TO SET PREVIOUS OR HIGHER YEARS IN THE YEAR MENU */
	const setValueDateInMenu = (symbol) => {
		if (symbol === "<") {
			setFlag((flag += -10));
		} else {
			setFlag((flag += 10));
		}
	};

	/* 
ALLOWS TO NAVIGATE ON THE PREVIOUS MONTH*/
	const previousMonth = () => {
		if (numericMonth === 0) {
			numericMonth = 11;
			setYear(year - 1);
		} else {
			numericMonth--;
		}
		setMonth(months[numericMonth]);
	};

	/* ALLOWS TO NAVIGATE ON THE NEXT MONTH*/
	const nextMonth = () => {
		if (numericMonth === 11) {
			numericMonth = 0;
			setYear(year + 1);
		} else {
			numericMonth++;
		}

		setMonth(months[numericMonth]);
	};

	return (
		<div className="container-calendar">
			<div className="calendar">
				<div className="calendar-header">
					<span onClick={previousMonth} className="previous-month">
						{" "}
						&#x3008;{" "}
					</span>
					<div className="container-actual-date">
						<p onClick={() => setVisibilityContainerMonth(true)} className="actualMonth">
							{month}
						</p>
						<p onClick={() => setVisibilityContainerYear(true)} className="actualYear">
							{year}
						</p>
					</div>
					<span onClick={nextMonth} className="next-month">
						{" "}
						&#x3009;{" "}
					</span>

					{visibilityContainerMonth && (
						<SectionCalendar
							array={months}
							method={(e) => selectMonth(e, setMonth, setVisibilityContainerMonth)}
							classWrapper={"select-date"}
							classElement={"select-month"}
						/>
					)}
					{visibilityContainerYear && (
						<SectionCalendar
							array={listYear}
							method={(e) => selectYear(e, setYear, setVisibilityContainerYear, setFlag)}
							secondMethod={setValueDateInMenu}
							classWrapper={"select-date"}
							classElement={"select-year"}
						/>
					)}
				</div>
				<SectionCalendar array={days} classWrapper={"calendar-all-days"} classElement={"day-of-week"} />
				<CalendarDays method={setter} arrayMonth={allMonths[month]} dayOne={firstDay} year={year} month={month} />
			</div>
		</div>
	);
};
Calendar.propTypes = {
	setter: PropTypes.func.isRequired,
};
export default Calendar;
