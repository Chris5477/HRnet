import PropTypes from "prop-types";

/* CREATE A REUSABLE COMPONENT BUTTON */

const Button = ({ nameClass, methods, text }) => {
	return (
		<button className={nameClass} onClick={methods && methods}>
			{text}
		</button>
	);
};
Button.propTypes = {
	nameClass: PropTypes.string,
	methods: PropTypes.func,
	text: PropTypes.string.isRequired,
};
export default Button;
