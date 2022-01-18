import { Link } from "react-router-dom";
import { utilsData } from "../ListingComponents/list-util-data";
import TableHead from "../components/TableHead";
import { useSelector } from "react-redux";
import LineEmployee from "../components/LineEmployee";

const ListEmployee = () => {
	const dataEmployee = useSelector((state) => state.employee);

	return (
		<div id="employee-div" className="containerList">
			<h2>Current Employees</h2>
			<span>
				Show
				<select>
					<option>10</option>
					<option>25</option>
					<option>50</option>
					<option>100</option>
				</select>
				entries
			</span>
			<table id="employee-table" className="display">
				<thead>
					<tr>
						{utilsData.map((element, index) => (
							<TableHead value={element} key={`index ${index}`} />
						))}
					</tr>
				</thead>
				<tbody>
					{dataEmployee.map((data, index) => (
						<LineEmployee data={data} key={`index ${index}`} />
					))}
				</tbody>
			</table>
			<Link to="/">Home</Link>
		</div>
	);
};
export default ListEmployee;
