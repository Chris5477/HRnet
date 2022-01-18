import { options } from "../ListingComponents/Listing-option";
import Option from "./Option";
import Calendar from "react-calendar";
import { useState, useRef } from "react";
import "react-calendar/dist/Calendar.css";

const InputWrapper = ({ label, text }) => {
	const [birthDay, setbirthDay] = useState("");
	const [beginDate, setbeginDate] = useState("");

	const showCalendar = (css) => {
		const element = document.querySelector(css);
		const allButtonsCalendar = [...document.querySelectorAll("button")];
		element.classList.remove("no-display");
		allButtonsCalendar.forEach((btn) => btn.addEventListener("click", () => element.classList.add("no-display")));
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
	} else if (label === "date-of-birth") {
		input = (
			<>
				<div className="calendar no-display">
					<Calendar onClickDay={(value) => setbirthDay(String(value).split(" ").splice(1, 3).join("/"))} />
				</div>
				<div className="formData">
					<label htmlFor={label}>{text}</label>

					<input onFocus={() => showCalendar(".calendar")} id={label} type="text" defaultValue={birthDay} />
				</div>
			</>
		);
	} else if (label === "start-date") {
		input = (
			<>
				<div className="calendar2 no-display">
					<Calendar onClickDay={(value) => setbeginDate(String(value).split(" ").splice(1, 3).join("/"))} />
				</div>
				<div className="formData">
					<label htmlFor={label}>{text}</label>

					<input onFocus={() => showCalendar(".calendar2")} id={label} type="text" defaultValue={beginDate} />
				</div>
			</>
		);
	} else {
		input = (
			<div className="formData">
				<label htmlFor={label}>{text}</label>
				<input id={label} type="text" />
			</div>
		);
	}

	return <>{input}</>;
};
export default InputWrapper;
