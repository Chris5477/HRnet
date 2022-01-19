import { listMaxResult } from "../ListingComponents/Listing-option";
import InputWrapper from "./InputWrapper";
import Option from "./Option";
import { useSelector, useDispatch } from "react-redux";
import { filteredEmployee } from "../redux/employee";
const MenuListEmployee = () => {
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const myDispatch = useDispatch();

	const setMaxResult = (e) => {
		myDispatch(filteredEmployee(e.target.value));
	};

	return (
		<div className="menu-list-employee">
			<span>
				Show
				<select onChange={(e) => setMaxResult(e)} value={maxEmployee}>
					{listMaxResult.map(({ value, text }, index) => (
						<Option key={`index ${index}`} value={value} text={text} />
					))}
				</select>
				entries
			</span>

			<InputWrapper label={"search"} text={"Search"} />
		</div>
	);
};
export default MenuListEmployee;
