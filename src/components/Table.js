import { utilsData } from "../ListingComponents/list-util-data";
import { useState } from "react";
import TableHead from "../components/TableHead";
import LineEmployee from "../components/LineEmployee";
import { useSelector } from "react-redux";

const Table = () => {
	const dataEmployee = useSelector((state) => state.employee);
	const maxEmployee = useSelector((state) => state.maxEmployee);
	const [boolean, setBoolean] = useState(false);

	const sortArray = (index) => {
		const keyList = Object.keys(dataEmployee[0]);
		const propriety = keyList[index];
		setBoolean(!boolean);
		return dataEmployee.sort((a, b) => a[propriety].localeCompare(b[propriety]));
	};

	const limitedResult = dataEmployee.filter((_, index) => index < maxEmployee);

	return (
		<table id="employee-table" className="display">
			<thead>
				<tr>
					{utilsData.map((element, index) => (
						<TableHead method={() => sortArray(index)} value={element} key={`index ${index}`} />
					))}
				</tr>
			</thead>
			<tbody>
				{limitedResult.map((data, index) => (
					<LineEmployee data={data} key={`index ${index}`} />
				))}
			</tbody>
		</table>
	);
};
export default Table;
