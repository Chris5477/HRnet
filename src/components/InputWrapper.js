import { options } from "../ListingComponents/Listing-option";
import Option from "./Option";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const InputWrapper = ({ label, text }) => {
	const showCalendar = () => {
		document.querySelector(".calendar").classList.remove("no-display");
	};
	let input = null;

	if (label === "Department") {
		input = (
			<div className="formData">
				<label htmlFor={label}>Department</label>
				<select name={label} id={label}>
					{options.map(({ value, text }, index) => (
						<Option value={value} text={text} key={`index ${index}`} />
					))}
				</select>
			</div>
		);
	} else if (label === "date-of-birth" || label === "start-date") {
		input = (
			<div className="formData">
				<label htmlFor={label}>{text}</label>
				<input onFocus={showCalendar} id={label} type="text" />
			</div>
		);
	} else {
		input = (
			<div className="formData">
				<label htmlFor={label}>{text}</label>
				<input id={label} type="text" />
			</div>
		);
	}

	return (
		<>
			<div className="calendar no-display">
				<Calendar onClickDay={(value) => console.log(value)} />
			</div>
			{input}
		</>
	);
};
export default InputWrapper;
