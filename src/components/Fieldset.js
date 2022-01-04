import InputWrapper from "./InputWrapper";

const Fieldset = ({ wrapperClass, legend, array }) => {
	return (
		<fieldset className={wrapperClass}>
			<legend>{legend}</legend>
			{array.map(({ label, text }, index) => (
				<InputWrapper label={label} text={text} key={`index + ${index}`} />
			))}
		</fieldset>
	);
};
export default Fieldset;
