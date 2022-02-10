import PropTypes from "prop-types";
import InputWrapper from "./InputWrapper";

/* CREATE A REUSABLE COMPONENT FILEDSET 
	SHOW A LIST OF INPUT */

const Fieldset = ({ wrapperClass, legend, array }) => {
	return (
		<fieldset className={wrapperClass}>
			<legend>{legend}</legend>
			{array.map(({ label, text }, index) => (
				<InputWrapper label={label} text={text} key={`index + ${index}`} />
			))}
			{legend === "Employee" && <InputWrapper label={"Department"} text={"Department"} />}
		</fieldset>
	);
};

Fieldset.propTypes = {
	wrapperClass: PropTypes.string,
	legend: PropTypes.string.isRequired,
	array: PropTypes.array.isRequired,
};
export default Fieldset;
