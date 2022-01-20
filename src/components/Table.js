import { utilsData } from "../ListingComponents/list-util-data";
import { useState } from "react";
import TableHead from "../components/TableHead";
import LineEmployee from "../components/LineEmployee";
import { useSelector } from "react-redux";

const Table = () => {
	const dataEmployee = useSelector((state) => state.employee);
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const [boolean, setBoolean] = useState(false);
	const [indexPagination, setIndexPagination] = useState(0);
	let arraySplit = [];
	let pieceOfArray = [];

	const sortArray = (index) => {
		const keyList = Object.keys(dataEmployee[0]);
		const propriety = keyList[index];
		setBoolean(!boolean);
		if (dataEmployee[0][propriety] < dataEmployee[4][propriety]) {
			return dataEmployee.sort((a, b) => b[propriety].localeCompare(a[propriety]));
		}
		return dataEmployee.sort((a, b) => a[propriety].localeCompare(b[propriety]));
	};

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
