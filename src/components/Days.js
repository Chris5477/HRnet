import PropTypes from "prop-types";
import { months } from "../utils/utils_date";

/* CREATE EACH DAYS IN CALENDAR */

const Days = ({ method, text, year, month }) => {
	/* ALLOWS TO GET DATE WITH THE GOOD FORMAT */
	const formatDate = (value) => {
		const numericMonth = months.indexOf(month) + 1;
		const formatMonth = String(numericMonth).length === 1 ? `0${numericMonth}` : numericMonth;
		const formatDay = String(value).length === 1 ? `0${value}` : value;
		return `${year}/${formatMonth}/${formatDay}`;
	};

	return (
		<span onClick={(e) => method && method(formatDate(e.target.textContent))} className={"day-of-month"}>
			{text}
		</span>
	);
};

Days.propTypes = {
	method: PropTypes.func,
	text: PropTypes.any.isRequired,
	year: PropTypes.any,
	month: PropTypes.any,
};
export default Days;
