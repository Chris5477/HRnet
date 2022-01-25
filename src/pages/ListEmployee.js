import { Link } from "react-router-dom";
import Table from "../components/Table";
import MenuListEmployee from "../components/MenuListEmployee";

const ListEmployee = () => {
	return (
		<div id="employee-div" className="containerList">
			<h2>Current Employees</h2>
			<MenuListEmployee />
			<Table />
			<Link className="link-home" to="/">
				Home
			</Link>
		</div>
	);
};
export default ListEmployee;
