import PropTypes from "prop-types";
import ArrowButton from "./ArrowButton";
import DateSelect from "./DateSelect";

/* CREATE A MENU FOR THE CALENDAR */

const SectionCalendar = ({ array, method, secondMethod, classWrapper, classElement }) => {
	return (
		<div className={classWrapper}>
			{/*VERIFY IF ARRAY CONTAINS YEARS OR MONTHS */}
			{!isNaN(array[0]) && (
				<header className="menu-year">
					<ArrowButton changeYears={secondMethod} text={"<"} classCss={"nav-year"} />
					<ArrowButton changeYears={secondMethod} text={">"} classCss={"nav-year"} />
				</header>
			)}
			{array.map((content, index) => (
				<DateSelect method={(e) => method && method(e)} key={`index ${index}`} classCss={classElement} text={content} />
			))}
		</div>
	);
};
SectionCalendar.propTypes = {
	array: PropTypes.array.isRequired,
	method: PropTypes.func,
	secondMethod: PropTypes.func,
	classWrapper: PropTypes.string.isRequired,
	classElement: PropTypes.string.isRequired,
};
export default SectionCalendar;
