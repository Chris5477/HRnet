import { utilsData } from "../ListingComponents/list-util-data";
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
	let j = 0;

	while (i < sizeListEmployee) {
		if (j == maxEmployee) {
			arraySplit.push(pieceOfArray);
			pieceOfArray = [];
			j = 0;
		} else if (i + 1 == sizeListEmployee) {
			arraySplit.push(pieceOfArray);
		}

		pieceOfArray.push(dataEmployee[i]);

		j++;
		i++;
	}
	// const sortArray = (index) => {
	// 	const proprieties = Object.keys(arraySplit[indexPagination][0])[index];

	// 	if (dataEmployee)
	// 		if (dataEmployee[0][proprieties] < dataEmployee[4][proprieties]) {
	// 			dataEmployee.sort((a, b) => b[proprieties].localeCompare(a[proprieties]));
	// 		} else {
	// 			dataEmployee.sort((a, b) => a[proprieties].localeCompare(b[proprieties]));
	// 		}
	// 	setBoolean(!boolean);
	// };

	const sortArray = (index) => {
		const propriety = Object.keys(arraySplit[indexPagination][0])[index];
		let array = arraySplit[indexPagination];
		setBoolean(!boolean);

		if (typeof array[0][propriety] === "number") {
			return (array =
				array[0][propriety] < array[3][propriety]
					? dataEmployee.sort((a, b) => b[propriety] - a[propriety])
					: dataEmployee.sort((a, b) => a[propriety] - b[propriety]));
		} else {
			return (array =
				array[0][propriety] > array[3][propriety]
					? dataEmployee.sort((a, b) => a[propriety].localeCompare(b[propriety]))
					: dataEmployee.sort((a, b) => b[propriety].localeCompare(a[propriety])));
		}
	};

	return (
		<>
			<table id="employee-table" className="display">
				<thead>
					<tr>
						{utilsData.map((element, index) => (
							<TableHead method={() => sortArray(index)} value={element} key={`index ${index}`} />
						))}
					</tr>
				</thead>

				<tbody>
					{arraySplit.length > 0 && arraySplit[indexPagination].map((data, index) => <LineEmployee data={data} key={`index ${index}`} />)}
				</tbody>
			</table>
			<div className="pagination">
				{arraySplit.map((_, index) => (
					<span onClick={() => setIndexPagination(index)} key={`index ${index}`}>
						{index + 1}
					</span>
				))}
			</div>
		</>
	);
};
export default Table;
