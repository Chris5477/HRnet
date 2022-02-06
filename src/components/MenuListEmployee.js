import { listMaxResult } from "../utils/Listing-option";
import { useRef, useState } from "react";
import InputWrapper from "./InputWrapper";
import { useSelector, useDispatch } from "react-redux";
import { filterEmployee, setMaxEmployee } from "../redux/employee";
import Select from "@chris5477/scroll-menu/dist/components/Select";

/* CREATE A COMPONENT WHICH CONTAINS MENULISTEMPLOYEE */

const MenuListEmployee = () => {
	const searchRef = useRef();

	/* GET VALUE OF STORE (REDUX ) */
	const totalEmployee = useSelector((state) => state.employee.length);
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const myDispatch = useDispatch();
	/* USE OF BOOLEAN TO RELOAD COMPONENT */
	const [boolean, setBoolean] = useState(false);

	/* ALLOWS TO SET A MAX FOR RESEARCH ON THE STORE*/
	const setMaxResult = (e) => {
		myDispatch(setMaxEmployee(e.target.value));
	};

	/* ALLOWS TO FILTER LIST EMPLOYEE OF THE STORE */
	const search = (val) => {
		setBoolean(!boolean);
		myDispatch(filterEmployee(val));
	};

	return (
		<div className="menu-list-employee">
			<span>
				Show <Select selectClass={"select-index"} handleChange={(e) => setMaxResult(e)} value={maxEmployee} arr={listMaxResult} /> entries
			</span>
			<span>Total employee : {totalEmployee}</span>
			<InputWrapper ref={searchRef} method={(val) => search(val)} label={"search"} text={"Search"} />
		</div>
	);
};
export default MenuListEmployee;
