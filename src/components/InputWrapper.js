import PropTypes from "prop-types";
import { options } from "../utils/Listing-option";
import Calendar from "../components/Calendar";
import { forwardRef, useState } from "react";
import Select from "@chris5477/scroll-menu/dist/components/Select";

/* CREATE A RESUABLE COMPONENT INPUT */

const InputWrapper = forwardRef(({ label, text, method }, ref) => {
	/* SET VALUE OF INPUT WHICH NEED SPECIAL TREATMENT */

	const [birthDay, setBirthday] = useState("");
	const [beginDate, setBeginDate] = useState("");
	const [showCalendar, setShowCalendar] = useState(false);

	/* ALLOWS TO SET A BIRTHDAY DATE AND CLOSE CALENDAR */

	const changeDateBirthday = (date) => {
		setBirthday(date);
		setShowCalendar(false);
	};

	/* ALLOWS TO SET A BEGIN DATE AND CLOSE CALENDAR */

	const changeDateBegin = (date) => {
		setBeginDate(date);
		setShowCalendar(false);
	};

	let input = null;

	/* IF LABEL IS EQUAL TO DEPARTMENT , THEN USE SELECT ELEMENT */

	if (label === "Department") {
		input = (
			<div className="formData">
				<Select id={"department"} textLabel={label} arr={options} />
			</div>
		);

		/* IF LABEL IS EQUAL TO BIRTHDAY , THEN USE CALENDAR COMPONENT */
	} else if (label === "birthday") {
		input = (
			<>
				<div className="formData">
					<label htmlFor={label}>{text}</label>
					<input autoComplete="none" onFocus={() => setShowCalendar(true)} id={label} type="text" defaultValue={birthDay} />
					{showCalendar && <Calendar setter={changeDateBirthday} />}
				</div>
			</>
		);
	} else if (label === "begin") {
		input = (
			<>
				<div className="formData">
					<label htmlFor={label}>{text}</label>
					<input autoComplete="none" onFocus={() => setShowCalendar(true)} id={label} type="text" defaultValue={beginDate} />
					{showCalendar && <Calendar setter={changeDateBegin} />}
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
