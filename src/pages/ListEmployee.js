import { Link } from "react-router-dom";

const ListEmployee = () => {
	return (
		<div id="employee-div" className="container">
			<h2>Current Employees</h2>
			<table id="employee-table" className="display"></table>
			<Link to="/">Home</Link>
		</div>
	);
};
export default ListEmployee;
