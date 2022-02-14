import { utilsData } from "../utils/Listing-inputs";
import { useState } from "react";
import TableHead from "../components/TableHead";
import LineEmployee from "../components/LineEmployee";
import { useSelector, useDispatch } from "react-redux";
import { changePagination } from "../redux/employee";

/* CREATE A TABLE COMPONENT TO LISTING ALL EMPLOYEES */

const Table = () => {
	const dispatch = useDispatch();
	/* GET VALUE ON THE STORE */

	const dataEmployee = useSelector((state) => state.filteredEmployee);
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const indexPagination = useSelector((state) => state.indexPagination);

	/* SET A BOOLEAN TO RELAOD COMPONENT */

	const [boolean, setBoolean] = useState();
	const [data, setData] = useState("");

	let arraySplit = [];
	let pieceOfArray = [];
	const sizeListEmployee = dataEmployee.length;
	let i = 0;

	/* USE WHILE LOOP TO POPULATE AN ARRAY FOR PAGINATION, EACH LAP , PIECEOFARRAY GET A NEW EMPLOYEE */
	while (i <= sizeListEmployee) {
		/* PIECEOFARRAY IT IS PUSHED INTO ANOTHER ARRAY THEN IS EMPTYED */
		if (pieceOfArray.length == maxEmployee) {
			arraySplit.push(pieceOfArray);
			pieceOfArray = [];
			/* STOP LOOP IF I IS EQUAL TO SIZE LIST EMPLOYEE */
		} else if (i === sizeListEmployee) {
			arraySplit.push(pieceOfArray);
			break;
		}
		pieceOfArray.push(dataEmployee[i]);
		i++;
	}

	/* ALLOWS TO SORT LIST EMPLOYEES */
	const sortArray = (index) => {
		const propriety = Object.keys(arraySplit[indexPagination][0])[index];
		if (data == propriety) {
			setData("");
			return dataEmployee.sort((a, b) => b[propriety].localeCompare(a[propriety]));
		}

		setData(propriety);
		setBoolean(!boolean);
		return dataEmployee.sort((a, b) => a[propriety].localeCompare(b[propriety]));
	};

	/* istanbul ignore next */

	const validArray = arraySplit[indexPagination] == undefined ? dataEmployee : arraySplit[indexPagination];

	return (
		<>
			<table id="employee-table" className="table">
				<thead>
					<tr>
						{utilsData.map((element, index) => (
							<TableHead method={() => sortArray(index)} value={element} key={`index ${index}`} />
						))}
					</tr>
				</thead>

				<tbody>
					{validArray.map((data, index) => (
						<LineEmployee data={data} key={`index ${index}`} />
					))}
				</tbody>
			</table>
			<div className="pagination">
				{arraySplit.map((_, index) => (
					<span
						className={index === indexPagination ? "activeSpan" : null}
						onClick={() => dispatch(changePagination(index))}
						key={`index ${index}`}
					>
						{index + 1}
					</span>
				))}
			</div>
		</>
	);
};
export default Table;
