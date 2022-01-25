import { options } from "../utils/Listing-option";
import Calendar from "react-calendar";
import { forwardRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Select from "./Select";

const InputWrapper = forwardRef(({ label, text, method }, ref) => {
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
				<Select label={label} text={"Department"} arr={options} />
			</div>
		);
	} else if (label === "date-of-birth") {
		input = (
			<>
				<div className="formData">
					<label htmlFor={label}>{text}</label>
					<input autoComplete="none" onFocus={() => setShowCalendar(true)} id={label} type="text" defaultValue={birthDay} />
					{showCalendar && <Calendar onChange={changeDateBirthday} />}
				</div>
			</>
		);
	} else if (label === "start-date") {
		input = (
			<>
				<div className="formData">
					<label htmlFor={label}>{text}</label>
					<input autoComplete="none" onFocus={() => setShowCalendar(true)} id={label} type="text" defaultValue={beginDate} />
					{showCalendar && <Calendar onChange={changeDateBegin} />}
				</div>
			</>
		);
	} else {
		input = (
			<div className="formData">
				<label htmlFor={label}>{text}</label>
				<input ref={ref} onChange={(e) => method && method(e.target.value)} id={label} type="text" />
			</div>
		);
	}

	return <>{input}</>;
});
export default InputWrapper;
