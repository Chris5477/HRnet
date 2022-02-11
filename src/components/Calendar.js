import { useState } from "react";
import CalendarDays from "./CalendarDays";
import SectionCalendar from "./SectionCalendar";
import { months, days, schemaMonths } from "../utils/utils_date";
import { correctPositionDay, selectMonth, selectYear } from "../utils/function.js";
import PropTypes from "prop-types";

const Calendar = ({ setter }) => {
	const [month, setMonth] = useState(months[new Date().getMonth()]);

	const [year, setYear] = useState(new Date().getFullYear());
	const [visibilityContainerMonth, setVisibilityContainerMonth] = useState(false);
	const [visibilityContainerYear, setVisibilityContainerYear] = useState(false);
	let [flag, setFlag] = useState(0);

	const allMonths = schemaMonths();

	let indexMonth = months.indexOf(month);

	const listYear = Array.from({ length: 10 })
		.fill(year)
		.map((currentYear, index) => currentYear - index + flag);

	const firstDay = correctPositionDay(year, indexMonth, days);

	const setValueDateInMenu = (symbol) => {
		if (symbol === "<") {
			setFlag((flag += -10));
		} else {
			setFlag((flag += 10));
		}
	};

	const previousMonth = () => {
		if (indexMonth == 0) {
			indexMonth = 11;
			setYear(year - 1);
		} else {
			indexMonth--;
		}
		setMonth(months[indexMonth]);
	};

	const nextMonth = () => {
		if (indexMonth == 11) {
			indexMonth = 0;
			setYear(year + 1);
		} else {
			indexMonth++;
		}

		setMonth(months[indexMonth]);
	};

	const formatMonth = () => (String(months.indexOf(month)).length === 1 ? `0${months.indexOf(month) + 1}` : months.indexOf(month));
	const correctFormatMonth = formatMonth();
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
							method={(e) => selectMonth(e, setMonth, setFlag, setVisibilityContainerMonth)}
							classWrapper={"select-date"}
							classElement={"select-month"}
						/>
					)}
					{visibilityContainerYear && (
						<SectionCalendar
							array={listYear}
							method={(e) => selectYear(e, setYear, setVisibilityContainerYear)}
							secondMethod={setValueDateInMenu}
							classWrapper={"select-date"}
							classElement={"select-year"}
						/>
					)}
				</div>
				<SectionCalendar array={days} classWrapper={"calendar-all-days"} classElement={"day-of-week"} />
				<CalendarDays method={setter} arrayMonth={allMonths[month]} dayOne={firstDay} year={year} month={correctFormatMonth} />
			</div>
		</div>
	);
};
Calendar.propTypes = {
	setter: PropTypes.func.isRequired,
};
export default Calendar;
