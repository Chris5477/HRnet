import { listMaxResult } from "../utils/Listing-option";
import { useRef, useState } from "react";
import InputWrapper from "./InputWrapper";
import { useSelector, useDispatch } from "react-redux";
import { filterEmployee, setMaxEmployee } from "../redux/employee";
import Select from "./Select";

const MenuListEmployee = () => {
	const searchRef = useRef();
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const myDispatch = useDispatch();
	const [boolean, setBoolean] = useState(false);

	const setMaxResult = (e) => {
		myDispatch(setMaxEmployee(e.target.value));
	};

	const search = (val) => {
		setBoolean(!boolean);
		myDispatch(filterEmployee(val));
	};
	return (
		<div className="menu-list-employee">
			<span>
				Show <Select method={(e) => setMaxResult(e)} value={maxEmployee} arr={listMaxResult} /> entries
			</span>

			<InputWrapper ref={searchRef} method={(val) => search(val)} label={"search"} text={"Search"} />
		</div>
	);
};
export default MenuListEmployee;
