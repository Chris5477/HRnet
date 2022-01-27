import Table from "../components/Table";
import MenuListEmployee from "../components/MenuListEmployee";
import Header from "../components/Header";

const ListEmployee = () => {
	return (
		<div id="employee-div" className="containerList">
			<Header link={"/"} text={"Home"} />
			<h2 className="subtitle">Current Employees</h2>
			<MenuListEmployee />
			<Table />
		</div>
	);
};
export default ListEmployee;
