import PropTypes from "prop-types";
const ArrowButton = ({ text, changeYears, classCss }) => {
	return (
		<span onClick={() => changeYears(text)} className={classCss}>
			{text}
		</span>
	);
};

ArrowButton.propTypes = {
	text: PropTypes.string.isRequired,
	changeYears: PropTypes.func,
	classCss: PropTypes.string,
};

export default ArrowButton;
