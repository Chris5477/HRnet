import { options } from "../ListingComponents/Listing-option";
import Option from "./Option";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const InputWrapper = ({ label, text }) => {
	const [birthDay, setbirthDay] = useState("");
	const [beginDate, setbeginDate] = useState("");
	const [showCalendar, setShowCalendar] = useState(false);

	const changeDateBirthday = (v) => {
		setbirthDay(String(v).split(" ").splice(1, 3).join("/"));
		setShowCalendar(false);
	};

	const changeDateBegin = (v) => {
		setbeginDate(String(v).split(" ").splice(1, 3).join("/"));
		setShowCalendar(false);
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
				<div className="formData">
					<label htmlFor={label}>{text}</label>
					<input onFocus={() => setShowCalendar(true)} id={label} type="text" defaultValue={birthDay} />
					{showCalendar && <Calendar onChange={changeDateBirthday} />}
				</div>
			</>
		);
	} else if (label === "start-date") {
		input = (
			<>
				<div className="formData">
					<label htmlFor={label}>{text}</label>
					<input autoComplete="false" onFocus={() => setShowCalendar(true)} id={label} type="text" defaultValue={beginDate} />
					{showCalendar && <Calendar onChange={changeDateBegin} />}
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
