import { options } from "../ListingComponents/Listing-option";
import Option from "./Option";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const InputWrapper = ({ label, text }) => {
	const [aaa, setaaa] = useState("");
	const [bbb, setbbb] = useState("");

	const closeModal = () => {
		document.querySelector(".calendar").classList.add("no-display");
	};

	const showCalendar = () => {
		document.querySelector(".calendar").classList.remove("no-display");
		document.querySelector(".react-calendar__month-view__days").addEventListener("click", closeModal);
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
					<Calendar onClickDay={(value) => setaaa(value)} />
				</div>
				<div className="formData">
					<label htmlFor={label}>{text}</label>

					<input onFocus={showCalendar} id={label} type="text" defaultValue={aaa} />
				</div>
			</>
		);
	} else if (label === "start-date") {
		input = (
			<>
				<div className="calendar no-display">
					<Calendar onClickDay={(value) => setbbb(value)} />
				</div>
				<div className="formData">
					<label htmlFor={label}>{text}</label>

					<input onFocus={showCalendar} id={label} type="text" defaultValue={bbb} />
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
