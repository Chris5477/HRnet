import { utilsData } from "../utils/Listing-inputs";
import { useState } from "react";
import TableHead from "../components/TableHead";
import LineEmployee from "../components/LineEmployee";
import { useSelector } from "react-redux";

/* CREATE A TABLE COMPONENT TO LISTING ALL EMPLOYEES */

const Table = () => {
	/* GET VALUE ON THE STORE */

	const dataEmployee = useSelector((state) => state.filteredEmployee);
	const maxEmployee = useSelector((state) => state.maxEmployee);

	/* SET A BOOLEAN TO RELAOD COMPONENT */

	const [boolean, setBoolean] = useState();

	/*SET AN INDEXPAGINATION TO SEPARATE ALL EMPLOYEES INTO SEVERAL LIST */
	const [indexPagination, setIndexPagination] = useState(0);

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
		let array = arraySplit[indexPagination];
		setBoolean(!boolean);

		/* KNOWING THAT ALL VALUES IN OUR FORM ARE OF TYPE STRING , USE THE LOCALECOMPARE METHOD */
		return (array =
			String(array[0][propriety]).toLowerCase() > String(array[array.length - 1][propriety].toLowerCase())
				? dataEmployee.sort((a, b) => a[propriety].localeCompare(b[propriety]))
				: dataEmployee.sort((a, b) => b[propriety].localeCompare(a[propriety])));
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
						onClick={() => setIndexPagination(index)}
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
