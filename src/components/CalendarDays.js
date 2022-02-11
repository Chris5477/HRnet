import Days from "./Days";
import PropTypes from "prop-types";

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

CalendarDays.propTypes = {
	numericMonth: PropTypes.number,
	dayOne: PropTypes.number.isRequired,
	method: PropTypes.func.isRequired,
	year: PropTypes.any,
	month: PropTypes.any.isRequired,
};
export default CalendarDays;
