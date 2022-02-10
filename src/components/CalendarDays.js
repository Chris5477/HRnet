import Days from "./Days";

const CalendarDays = ({ arrayMonth, dayOne, method, year, month }) => {
	return (
		<div className="calendar-days-of-month">
			{Array.from({ length: arrayMonth + dayOne }).map((_, index) =>
				index >= dayOne ? (
					<Days method={method} year={year} month={month} key={`index ${index}`} text={index - dayOne + 1} />
				) : (
					<Days key={`index ${index}`} text={""} />
				)
			)}
		</div>
	);
};
export default CalendarDays;
