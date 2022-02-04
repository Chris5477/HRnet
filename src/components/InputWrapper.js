import PropTypes from "prop-types";
import { options } from "../utils/Listing-option";
import Calendar from "react-calendar";
import { forwardRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Select from "@chris5477/scroll-menu/dist/components/Select";

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
				<Select textLabel={label} arr={options} />
			</div>
		);
	} else if (label === "birthday") {
		input = (
			<>
				<div className="formData">
					<label htmlFor={label}>{text}</label>
					<input autoComplete="none" onFocus={() => setShowCalendar(true)} id={label} type="text" defaultValue={birthDay} />
					{showCalendar && <Calendar onChange={changeDateBirthday} />}
				</div>
			</>
		);
	} else if (label === "begin") {
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

InputWrapper.propTypes = {
	label: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	method: PropTypes.func,
};
export default InputWrapper;
