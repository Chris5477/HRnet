import { utilsData } from "../utils/Listing-inputs";
import { useState } from "react";
import TableHead from "../components/TableHead";
import LineEmployee from "../components/LineEmployee";
import { useSelector } from "react-redux";

const Table = () => {
	const dataEmployee = useSelector((state) => state.filteredEmployee);
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const [boolean, setBoolean] = useState();
	const [indexPagination, setIndexPagination] = useState(0);
	let arraySplit = [];
	let pieceOfArray = [];
	const sizeListEmployee = dataEmployee.length;
	let i = 0;
	while (i <= sizeListEmployee) {
		if (pieceOfArray.length == maxEmployee) {
			arraySplit.push(pieceOfArray);
			pieceOfArray = [];
		} else if (i === sizeListEmployee) {
			arraySplit.push(pieceOfArray);
			break;
		}
		pieceOfArray.push(dataEmployee[i]);
		i++;
	}

	const sortArray = (index) => {
		const propriety = Object.keys(arraySplit[indexPagination][0])[index];
		let array = arraySplit[indexPagination];
		setBoolean(!boolean);
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
