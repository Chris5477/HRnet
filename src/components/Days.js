import PropTypes from "prop-types";
const Days = ({ method, text, year, month }) => {
	return (
		<span onClick={(e) => method && method(`${year}/${month}/${e.target.innerText}`)} className={"day-of-month"}>
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
