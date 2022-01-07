import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link className="link" to="/employee-list">
				View Current Employees
			</Link>
			<h1 className="title-page">Create Employee</h1>
		</header>
	);
};
export default Header;
