import PropTypes from "prop-types";
import { options } from "../utils/Listing-option";
import Calendar from "react-calendar";
import { forwardRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Select from "@chris5477/scroll-menu/dist/components/Select";

/* CREATE A RESUABLE COMPONENT INPUT */

const InputWrapper = forwardRef(({ label, text, method }, ref) => {
	/* SET VALUE OF INPUT WHICH NEED SPECIAL TREATMENT */

	const [birthDay, setbirthDay] = useState("");
	const [beginDate, setbeginDate] = useState("");
	const [showCalendar, setShowCalendar] = useState(false);

	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	/* ALLOWS TO SET A BIRTHDAY DATE AND CLOSE CALENDAR */

	const formatDate = (date) => {
		const [month, day, year] = String(date).split(" ").splice(1, 3);
		const indexMonth = months.indexOf(month) + 1;
		const formatMonth = String(indexMonth).length == 1 ? "0" + indexMonth : indexMonth;
		return `${year}/${formatMonth}/${day}`;
	};

	const changeDateBirthday = (date) => {
		const birthdayDate = formatDate(date);
		setbirthDay(birthdayDate);
		setShowCalendar(false);
	};

	/* ALLOWS TO SET A BEGIN DATE AND CLOSE CALENDAR */

	const changeDateBegin = (date) => {
		const beginDate = formatDate(date);
		setbeginDate(beginDate);
		setShowCalendar(false);
	};

	let input = null;

	/* IF LABEL IS EQUAL TO DEPARTMENT , THEN USE SELECT ELEMENT */

	if (label === "Department") {
		input = (
			<div className="formData">
				<Select textLabel={label} arr={options} />
			</div>
		);

		/* IF LABEL IS EQUAL TO BIRTHDAY , THEN USE CALENDAR COMPONENT */
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

		/* ELSE WE USE A CLASSIC INPUT */
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
