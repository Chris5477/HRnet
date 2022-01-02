import { options } from "../ListingComponents/Listing-option";
import Option from "./Option";

const InputWrapper = ({ label, text }) => {
	return label == "Department" ? (
		<div className="formData">
			<label htmlFor={label}>Department</label>
			<select name={label} id={label}>
				{options.map(({ value, text }, index) => (
					<Option value={value} text={text} key={`index ${index}`} />
				))}
			</select>
		</div>
	) : (
		<div className="formData">
			<label htmlFor={label}>{text}</label>
			<input id={label} type="text" />
		</div>
	);
};
export default InputWrapper;
