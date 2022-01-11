import InputWrapper from "./InputWrapper";

const Fieldset = ({ wrapperClass, legend, array }) => {
	return (
		<fieldset className={wrapperClass}>
			<legend>{legend}</legend>
			{array.map(({ label, text }, index) => (
				<InputWrapper label={label} text={text} key={`index + ${index}`} />
			))}
			{legend == "Employee" && <InputWrapper label={"Department"} text={"Department"} />}
		</fieldset>
	);
};
export default Fieldset;
