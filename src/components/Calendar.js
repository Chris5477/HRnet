import { useState } from "react";
import CalendarDays from "./CalendarDays";
import SectionCalendar from "./SectionCalendar";
import ArrowButton from "./ArrowButton";
import { months, days, schemaMonths } from "../utils/utils_date";
import { correctPositionDay, selectMonth, selectYear } from "../utils/function.js";

const Calendar = ({ setter }) => {
	const [month, setMonth] = useState(months[new Date().getMonth()]);
	const [year, setYear] = useState(new Date().getFullYear());
	const [visibilityContainerMonth, setVisibilityContainerMonth] = useState(false);
	const [visibilityContainerYear, setVisibilityContainerYear] = useState(false);
	let [flag, setFlag] = useState(0);

	const allMonths = schemaMonths();

	const indexMonth = months.indexOf(month);

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

	const formatMonth = () => (String(months.indexOf(month)).length === 1 ? `0${months.indexOf(month) + 1}` : months.indexOf(month));
	const correctFormatMonth = formatMonth();
	return (
		<div className="container-calendar">
			<div className="calendar">
				<div className="calendar-header">
					<div className="container-actual-date">
						<p onClick={() => setVisibilityContainerMonth(true)} className="actualMonth">
							{month}
						</p>
						<p onClick={() => setVisibilityContainerYear(true)} className="actualYear">
							{year}
						</p>
					</div>

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
export default Calendar;
