import PropTypes from "prop-types";
const DateSelect = ({ method, classCss, text }) => {
	return (
		<span onClick={(e) => method && method(e)} className={classCss}>
			{text}
		</span>
	);
};

DateSelect.propTypes = {
	method: PropTypes.func.isRequired,
	classCss: PropTypes.string,
	text: PropTypes.any,
};
export default DateSelect;
