import { listMaxResult } from "../ListingComponents/Listing-option";
import { useRef } from "react";
import InputWrapper from "./InputWrapper";
import Option from "./Option";
import { useSelector, useDispatch } from "react-redux";
import { filteredEmployee } from "../redux/employee";
import Select from "./Select";

const MenuListEmployee = () => {
	const searchRef = useRef();
	const listEmployee = useSelector((state) => state.employee);
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const myDispatch = useDispatch();

	const setMaxResult = (e) => {
		myDispatch(filteredEmployee(e.target.value));
	};

	const search = (e) => {
		const y = listEmployee.map((el) => Object.values(el)).filter((el) => String(el).toLowerCase().match(e.toLowerCase()));
	};

	return (
		<div className="menu-list-employee">
			<span>
				Show <Select method={(e) => setMaxResult(e)} value={maxEmployee} arr={listMaxResult} /> entries
			</span>

			<InputWrapper ref={searchRef} method={search} label={"search"} text={"Search"} />
		</div>
	);
};
export default MenuListEmployee;
